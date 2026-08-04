export function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Future Wave Labs",
        "url": "https://www.futurewavelabs.in",
        "logo": "https://www.futurewavelabs.in/fwl-logo-white.png",
        "description": "Leading AI automation company specializing in intelligent agents, website development, mobile apps, software solutions, and cutting-edge digital transformation.",
        "foundingDate": "2024",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "sameAs": [
            "https://www.linkedin.com/company/futurewavelabs",
            "https://twitter.com/futurewavelabs"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "availableLanguage": ["English"]
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "knowsAbout": [
            "Artificial Intelligence",
            "AI Automation",
            "Web Development",
            "Mobile App Development",
            "Software Development",
            "Digital Transformation",
            "SaaS Solutions"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
