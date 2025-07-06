import { NextRequest, NextResponse } from 'next/server';
import Retell from 'retell-sdk';

// Use the hardcoded API key for now since environment variables are having issues
const RETELL_API_KEY = 'key_ad0e72345907a2bf50adfc52be0f';

const client = new Retell({
  apiKey: RETELL_API_KEY,
});

// Agent configuration - using the specified agent ID
const AGENT_ID = "agent_5a21a130c76cd62e4fb7a4c86d";

const agentConfig = {
  "agent_name": "FWL Agent - Aura",
  "response_engine": {
    "type": "retell-llm" as const,
    "llm_id": "llm_43c899bb92769dcad339c11a5524"
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
    
    // Use the specific agent ID
    const agentId = AGENT_ID;
    console.log('Using specified agent ID:', agentId);

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
  try {
    // Test API connection and list agents
    const agentsResponse = await client.agent.list();
    
    return NextResponse.json({
      message: "Retell Web Call API endpoint is working",
      timestamp: new Date().toISOString(),
      hasApiKey: !!RETELL_API_KEY,
      apiKeyPreview: RETELL_API_KEY ? `${RETELL_API_KEY.substring(0, 8)}...` : 'None',
      availableAgents: agentsResponse.agents?.map(agent => ({
        id: agent.agent_id,
        name: agent.agent_name,
        voice: agent.voice_id
      })) || [],
      totalAgents: agentsResponse.agents?.length || 0
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Retell Web Call API endpoint is working but agent listing failed",
      timestamp: new Date().toISOString(),
      hasApiKey: !!RETELL_API_KEY,
      apiKeyPreview: RETELL_API_KEY ? `${RETELL_API_KEY.substring(0, 8)}...` : 'None',
      error: error.message,
      status: error.status
    });
  }
} 