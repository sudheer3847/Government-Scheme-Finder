const schemes = [
    {
        name: "National Scholarship Portal (NSP)",
        category: "student",
        minAge: 16,
        maxAge: 25,
        maxIncome: 300000,
        description: "Financial support and tuition fee waivers for deserving students pursuing higher education.",
        documents: "[Verification ID Card] / Student ID, Income Certificate, Bank Passbook, Marksheets",
        link: "https://scholarships.gov.in"
    },
    {
        name: "PM-KISAN Samman Nidhi",
        category: "farmer",
        minAge: 18,
        maxAge: 100,
        maxIncome: 500000,
        description: "Income support of ₹6,000 per year to all landholding farmer families across the country.",
        documents: "Land Ownership Papers, Bank Account Details, [ID Card Proof]",
        link: "https://pmkisan.gov.in"
    },
    {
        name: "Stand-Up India Scheme for Women",
        category: "woman",
        minAge: 18,
        maxAge: 60,
        maxIncome: 10000000,
        description: "Bank loans between ₹10 lakh and ₹1 crore for greenfield enterprises set up by women entrepreneurs.",
        documents: "Business Project Report, Proof of Identity, Address Proof, Bank Statements",
        link: "https://www.standupmitra.in"
    },
    {
        name: "Atal Vayo Abhyuday Yojana (AVYAY)",
        category: "senior",
        minAge: 60,
        maxAge: 100,
        maxIncome: 250000,
        description: "Empowerment and welfare support schemes designed specifically for senior citizens.",
        documents: "Age Proof Certificate, Senior Citizen Card, Income Proof",
        link: "https://socialjustice.gov.in"
    },
    {
        name: "Pradhan Mantri Mudra Yojana (PMMY)",
        category: "all",
        minAge: 18,
        maxAge: 65,
        maxIncome: 800000,
        description: "Collateral-free loans up to ₹10 lakh for micro and small enterprise businesses.",
        documents: "Business Proof, Identity Proof, Address Proof, Quotations for machinery/items",
        link: "https://www.mudra.org.in"
    }
];

document.getElementById('schemeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const income = parseFloat(document.getElementById('income').value);
    const category = document.getElementById('category').value;

    const resultContainer = document.getElementById('resultContainer');
    const schemeResults = document.getElementById('schemeResults');
    
    schemeResults.innerHTML = '';

    // Filter logic based on user inputs
    const matchedSchemes = schemes.filter(scheme => {
        const matchesAge = age >= scheme.minAge && age <= scheme.maxAge;
        const matchesIncome = income <= scheme.maxIncome;
        const matchesCategory = (category === 'all' || scheme.category === category || scheme.category === 'all');
        
        return matchesAge && matchesIncome && matchesCategory;
    });

    resultContainer.classList.remove('hidden');

    if (matchedSchemes.length > 0) {
        matchedSchemes.forEach(scheme => {
            const card = document.createElement('div');
            card.className = 'scheme-card';
            card.innerHTML = `
                <h4>${scheme.name}</h4>
                <p>${scheme.description}</p>
                <div class="docs"><strong>Required Docs:</strong> ${scheme.documents}</div>
                <a href="${scheme.link}" target="_blank" class="apply-btn">Visit Official Portal →</a>
            `;
            schemeResults.appendChild(card);
        });
    } else {
        schemeResults.innerHTML = `
            <div class="scheme-card" style="border-left-color: #ef4444; text-align: center;">
                <h4>No exact matches found</h4>
                <p>Try adjusting your age or income criteria, or explore general schemes on the national portal.</p>
                <a href="https://www.myscheme.gov.in" target="_blank" class="apply-btn" style="background: #0f172a;">Browse MyScheme.gov.in</a>
            </div>
        `;
    }
});
