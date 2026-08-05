export function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.futurewavelabs.in/#organization",
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
            },
            {
                "@type": "WebSite",
                "@id": "https://www.futurewavelabs.in/#website",
                "url": "https://www.futurewavelabs.in",
                "name": "Future Wave Labs",
                "publisher": {
                    "@id": "https://www.futurewavelabs.in/#organization"
                },
                "inLanguage": "en-IN"
            },
            {
                "@type": "Service",
                "@id": "https://www.futurewavelabs.in/#service-ai-automation",
                "serviceType": "AI Automation and Intelligent Agent Development",
                "provider": {
                    "@id": "https://www.futurewavelabs.in/#organization"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "India"
                }
            },
            {
                "@type": "Service",
                "@id": "https://www.futurewavelabs.in/#service-web-mobile-software",
                "serviceType": "Website Development, Mobile App Development, and Software Solutions",
                "provider": {
                    "@id": "https://www.futurewavelabs.in/#organization"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "India"
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
