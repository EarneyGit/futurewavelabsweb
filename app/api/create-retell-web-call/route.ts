import { NextRequest, NextResponse } from 'next/server';
import Retell from 'retell-sdk';

// Use the hardcoded API key for now since environment variables are having issues
const RETELL_API_KEY = 'key_ad0e72345907a2bf50adfc52be0f';

const client = new Retell({
  apiKey: RETELL_API_KEY,
});

// Agent configuration - this will create the "Aura" agent for Future Wave Labs
const agentConfig = {
  "agent_name": "FWL Agent - Aura",
  "response_engine": {
    "type": "retell-llm" as const,
    "llm_id": "llm_2411c596baa3772282bd65af177b"
  },
  "language": "en-IN" as const,
  "opt_out_sensitive_data_storage": false,
  "opt_in_signed_url": false,
  "end_call_after_silence_ms": 10000,
  "post_call_analysis_model": "gpt-4o-mini" as const,
  "voice_id": "11labs-Cimo",
  "max_call_duration_ms": 179000,
  "interruption_sensitivity": 0.8,
  "ambient_sound": "call-center" as const,
  "ring_duration_ms": 5000,
  "user_dtmf_options": {},
};

export async function POST(request: NextRequest) {
  try {
    console.log('=== Creating Retell web call ===');
    console.log('Using API Key:', RETELL_API_KEY ? 'Available' : 'Missing');
    
    // First, create or get the agent
    let agentId = process.env.RETELL_AGENT_ID;
    
    if (!agentId) {
      // Create agent if not exists
      console.log('Creating new agent with config:', {
        name: agentConfig.agent_name,
        voice: agentConfig.voice_id,
        language: agentConfig.language
      });
      
      try {
        const agentResponse = await client.agent.create({
          response_engine: agentConfig.response_engine,
          voice_id: agentConfig.voice_id,
          language: agentConfig.language,
          agent_name: agentConfig.agent_name,
          max_call_duration_ms: agentConfig.max_call_duration_ms,
          end_call_after_silence_ms: agentConfig.end_call_after_silence_ms,
          interruption_sensitivity: agentConfig.interruption_sensitivity,
          ambient_sound: agentConfig.ambient_sound,
          ring_duration_ms: agentConfig.ring_duration_ms,
          post_call_analysis_model: agentConfig.post_call_analysis_model,
          opt_out_sensitive_data_storage: agentConfig.opt_out_sensitive_data_storage,
          opt_in_signed_url: agentConfig.opt_in_signed_url,
          user_dtmf_options: agentConfig.user_dtmf_options,
        });
        agentId = agentResponse.agent_id;
        console.log('✅ Agent created successfully with ID:', agentId);
      } catch (agentError: any) {
        console.error('❌ Error creating agent:', {
          error: agentError.message,
          status: agentError.status,
          details: agentError
        });
        
        // Return more detailed error information
        return NextResponse.json(
          { 
            success: false, 
            error: 'Failed to create agent',
            details: agentError.message || 'Unknown agent creation error',
            retellError: agentError
          },
          { status: 500 }
        );
      }
    } else {
      console.log('Using existing agent ID:', agentId);
    }

    // Create web call
    console.log('Creating web call with agent ID:', agentId);
    try {
      const webCallResponse = await client.call.createWebCall({
        agent_id: agentId,
      });

      console.log('✅ Web call created successfully:', {
        call_id: webCallResponse.call_id,
        agent_id: agentId
      });
      
      return NextResponse.json({
        success: true,
        call_id: webCallResponse.call_id,
        access_token: webCallResponse.access_token,
        agent_id: agentId,
        message: "Voice agent ready to connect!"
      });
    } catch (callError: any) {
      console.error('❌ Error creating web call:', {
        error: callError.message,
        status: callError.status,
        details: callError
      });
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to create web call',
          details: callError.message || 'Unknown call creation error',
          retellError: callError
        },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('❌ Unexpected error in create-retell-web-call:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        details: error.message || 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}

// Add a GET method for testing
export async function GET() {
  return NextResponse.json({
    message: "Retell Web Call API endpoint is working",
    timestamp: new Date().toISOString(),
    hasApiKey: !!RETELL_API_KEY,
    apiKeyPreview: RETELL_API_KEY ? `${RETELL_API_KEY.substring(0, 8)}...` : 'None'
  });
} 