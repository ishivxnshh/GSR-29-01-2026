// The single source of truth for all Blogs post data
const BlogsPosts = [
    { id: 1, title: '3 Compliance Acts Navi Mumbai Godrej Properties Follows Consistently', date: 'October 05, 2025', summary: 'Learn how Godrej Properties navigates RERA regulations with the Expression of Interest (EOI) model, strategic pricing gaps, and brand-driven real estate credibility in Tier 2 cities.', image: '/assets/images/blogs-title-card/blog01.webp', url: 'godrej-navi-mumbai-rera-compliance', city: 'Navi Mumbai' },
    { id: 2, title: 'How Navi Mumbai Content Creators Are Transforming Godrej Homes', date: 'October 06, 2025', summary: 'Discover how Godrej Properties is redefining urban living for creators and executives by integrating hybrid workspaces, tech-enabled bookings, and community co-working amenities in its homes.', image: '/assets/images/blogs-title-card/blog02.webp', url: 'navi-mumbai-content-creators', city: 'Navi Mumbai' },
    { id: 3, title: 'The Godrej Difference: Unpacking the Customer Journey from Site Visit to Possession in Kharghar', date: 'October 07, 2025', summary: 'The Godrej customer journey is designed as a seamless, high-touch experience, transforming the process from an anxious purchase into a celebrated milestone.', image: '/assets/images/blogs-title-card/blog03.webp', url: 'site-visit-to-possession-in-kharghar', city: 'Navi Mumbai' },
    { id: 4, title: 'Why Godrej Kukatapally (Hyderabad Central) Is Perfect Fit for IT Folks?', date: 'October 09, 2025', summary: 'Reveal the earlier insights on this super premium residential Kukatpally project by Godrej in Hyderabad Central', image: '/assets/images/blogs-title-card/blog04.webp', url: 'godrej-kukatapally-hyderabad-central', city: 'Hyderabad' },
    { id: 5, title: '5 Core Strengths of Pune Kharadi - Godrej Property (Hint: IT Service Sector)', date: 'October 14, 2025', summary: 'How much is the rental potential? Metro expansion & higher growth potential compared to Koregaon Park & Hinjewadi. Get early insights..', image: '/assets/images/blogs-title-card/blog05.webp', url: 'pune-kharad-godrej-property', city: 'Pune' },
    { id: 6, title: 'What Impacts Godrej Nagpur Estate Due to Samrudhi Mahamarg', date: 'October 17, 2025', summary: 'Why Godrej Nagpur is and will be the most prime location for industrialists to take plots for business expansion', image: '/assets/images/blogs-title-card/blog06.webp', url: 'godrej-nagpur-samruddhi-mahamarg', city: 'Nagpur' },
    { id: 7, title: 'Why Logistics Sector Companies Must Book Plots at Godrej Nagpur', date: 'October 20, 2025', summary: 'With the amazing infrastructure and so many connectivity areas, Godrej Nagpur has all the optimal conditions for a sustainable logistics business', image: '/assets/images/blogs-title-card/blog07.webp', url: 'godrej-nagpur-logistics', city: 'Nagpur' },
    { id: 8, title: 'How Godrej Makes Buying a Home in Kharghar Easy From Day 1 to Possession', date: 'October 22, 2025', summary: 'Uncover home-buying experience in Kharghar with a premium site visit process, transparent construction updates, dedicated post-sales support', image: '/assets/images/blogs-title-card/blog08.webp', url: 'godrej-kharghar-booking-process', city: 'Navi Mumbai' },
    { id: 9, title: 'Why Godrej Homes in Kharghar Are Known for Quality and Safety', date: 'October 23, 2025', summary: 'Discover how Godrej Properties delivers superior construction quality and safety in its Kharghar projects through branded materials, expert partnerships, and strict site protocols.', image: '/assets/images/blogs-title-card/blog09.webp', url: 'godrej-kharghar-safety', city: 'Navi Mumbai' },
    { id: 10, title: 'Why Kharghar Is Becoming Navi Mumbais Next Big Hotspot', date: 'October 25, 2025', summary: 'Kharghar 3.0 - powered by NMIA airport, metro, BKC 2.0 commercial growth, FDZ, and premium social infrastructure - is driving Godrej\'s luxury project launch.', image: '/assets/images/blogs-title-card/blog10.webp', url: 'godrej-kharghar-luxury', city: 'Navi Mumbai' },
    { id: 11, title: 'Why Kharghar Is One of the Best Places to Invest in the Next 5-10 Years', date: 'November 01, 2025', summary: 'Explore why Kharghar and Navi Mumbai are set for massive 5-10 year real estate growth driven by NMIA, metro, FDZ, the Kharghar–Turbhe tunnel, and Godrej\'s premium entry', image: '/assets/images/blogs-title-card/blog11.webp', url: 'godrej-kharghar-invest', city: 'Navi Mumbai' },
    { id: 12, title: 'The Godrej Difference: Unpacking the Customer Journey from Site Visit to Possession in Kharghar', date: 'November 03, 2025', summary: 'The Godrej customer journey is designed as a seamless, high-touch experience, transforming the process from an anxious purchase into a celebrated milestone.', image: '/assets/images/blogs-title-card/blog12.webp', url: 'the-godrej-property-customer-journey', city: 'Navi Mumbai' },
    { id: 13, title: 'Decoding Property Finance: The Full Spectrum of Home Loan Options for Godrej Kharghar Buyers', date: 'November 05, 2025', summary: 'This blog details the streamlined financing system available at Godrej project launches, designed to expedite the booking process. ', image: '/assets/images/blogs-title-card/blog13.webp', url: 'home-loan-options-for-godrej-kharghar', city: 'Navi Mumbai' },
    { id: 14, title: 'Built on Trust: How Godrej Ensures Superior Quality and Safety Standards in Kharghar Projects', date: 'November 10, 2025', summary: 'In real estate, the strength of a brand is built on the quality of its construction and the safety it guarantees.', image: '/assets/images/blogs-title-card/blog14.webp', url: 'godrej-properties-quality-and-safety', city: 'Navi Mumbai' },
    { id: 15, title: 'Kharghar 3.0: Why Godrej is Leveraging Superb Connectivity and Social Infrastructure', date: 'November 15, 2025', summary: 'Kharghar is quickly evolving from a well-planned node into a central hub, earning the moniker "Kharghar 3.0"-a development phase defined by unparalleled infrastructure. ', image: '/assets/images/blogs-title-card/blog15.webp', url: 'kharghar-three-o', city: 'Navi Mumbai' },
    { id: 16, title: 'Investing in Tomorrow: A 5-10 Year Outlook on the Evolving Real Estate Landscape of Navi Mumbai and Kharghar', date: 'November 18, 2025', summary: 'Navi Mumbai is not just an extension of the original city; it is being established as a meticulously planned urban center with its own booming future.', image: '/assets/images/blogs-title-card/blog16.webp', url: 'real-estate-landscape-of-navi-mumbai-and-kharghar', city: 'Navi Mumbai' },
    { id: 17, title: 'Unlocking Savings: A Guide to Government Housing Schemes and Incentives for Property Buyers', date: 'November 21, 2025', summary: 'PMAY & Women Applicant Benefits: Government Schemes Reducing Home Loan Interest Rates', image: '/assets/images/blogs-title-card/blog17.webp', url: 'government-housing-schemes-and-incentives', city: 'Navi Mumbai' },
    { id: 18, title: 'Godrej Quality Assurance: From Green Building Certification to Post-Construction Warranty & Disclosures', date: 'November 22, 2025', summary: 'Godrej property warranty, green building certification, construction safety risk, post-construction warranty, property damage fault, walking building concept, disclosure property details', image: '/assets/images/blogs-title-card/blog18.webp', url: 'godrej-property-warranty', city: 'Navi Mumbai' },
    { id: 19, title: 'Beyond Price: Why White-Collar Buyers Prioritize Brand, Gender, and Community in Kharghar Real Estate', date: 'November 28, 2025', summary: 'Kharghar white-collar buyers, Godrej brand value, community homogeneity property, gender preference society, luxury real estate demand, social strata property, two paisa extra luxury', image: '/assets/images/blogs-title-card/blog19.webp', url: 'godrej-brand-value', city: 'Navi Mumbai' },
    { id: 20, title: 'Navi Mumbai Real Estate Pulse: Resources for Tracking New Godrej Projects and Market Updates', date: 'November 29, 2025', summary: 'Tracking New Godrej Property Launches in Mumbai: Official News & Market Update Resources', image: '/assets/images/blogs-title-card/blog20.webp', url: 'new-godrej-projects-and-market-updates', city: 'Navi Mumbai' },
    { id: 21, title: 'Raipur Real Estate Boom: Key Infrastructure Projects Driving 40% Appreciation (BharatMala, Metro, SCR)', date: 'December 03, 2025', summary: 'Raipur Real Estate Appreciation: BharatMala Expressway, Metro Corridor & SCR Initiative', image: '/assets/images/blogs-title-card/blog21.webp', url: 'raipur-real-estate-appreciation', city: 'Raipur' },
    { id: 22, title: 'Why Raipur is Central Indias Next Investment Hub Lifestyle, Resources, and Connectivity', date: 'December 05, 2025', summary: 'Raipur Investment Hub: Central Indias Connectivity, Natural Resources & HNI Buyer Profile', image: '/assets/images/blogs-title-card/blog22.webp', url: 'raipur-investment-hub', city: 'Raipur' },
    { id: 23, title: 'The Godrej Green Forest Groove Theme: Eco-Friendly Development in Raipurs Hot Climate', date: 'December 07, 2025', summary: 'Godrej Raipurs Urban Forest Grove: 2000 + Exotic Trees & 10 Themed Gardens for Eco - Living', image: '/assets/images/blogs-title-card/blog23.webp', url: 'godrej-raipur-urban-forest-grove', city: 'Raipur' },
    { id: 24, title: 'Beyond Plots: Unpacking Godrej Raipurs 22,000 Sq.Ft.Clubhouse & Luxury Amenities', date: 'December 09, 2025', summary: 'Godrej Raipur Luxury Amenities: 22,000 Sq. Ft. Clubhouse, Pool, and Sports Facilities', image: '/assets/images/blogs-title-card/blog24.webp', url: 'godrej-raipur-luxury-amenities', city: 'Raipur' },
    { id: 25, title: 'The Gold Standard of Maintenance: Why Godrej Living is a Game-Changer for Raipur Real Estate', date: 'December 12, 2025', summary: 'Godrej Living Maintenance: Raipurs Game- Changer for Society Maintenance and Property Appreciation', image: '/assets/images/blogs-title-card/blog25.webp', url: 'godrej-living-maintenance', city: 'Raipur' },
    { id: 26, title: 'Targeting the Titans: Marketing Strategies for BSP, NTPC, and Businessmen in the Raipur Region', date: 'December 14, 2025', summary: 'BSP & NTPC Employees: Targeting Strategies for Godrej Raipurs White- Collar Audience', image: '/assets/images/blogs-title-card/blog26.webp', url: 'BSP-and-NTPC-employees', city: 'Raipur' },
    { id: 27, title: 'Raipur Vizag Greenfield Expressway Impact on Raipur Property Prices', date: 'December 16, 2025', summary: ' Visakhapatnam–Raipur Greenfield Expressway cuts travel time to 5 hours and increases Raipur property, plots for sale, and real estate growth on Old Dhamtari Road', image: '/assets/images/blogs-title-card/blog27.webp', url: 'raipur-vizag-greenfield-expressway-property', city: 'Raipur' },
    { id: 28, title: 'NH-130CD Raipur Vizag Smart Highway: AI Traffic Systems & Global Engineering Driving Raipur Commercial Property Growth', date: 'December 20, 2025', summary: 'How the NH-130CD Raipur Vizag Greenfield Expressway, AI traffic systems, and global engineering are powering Raipur commercial property growth.', image: '/assets/images/blogs-title-card/blog28.webp', url: 'nh-130cd-raipur-vizag-smart-highway', city: 'Raipur' },
    { id: 29, title: 'Raipur Flats for Sale & Rent Price Trends in 2025', date: 'December 21, 2025', summary: 'Why professionals are choosing Raipur - affordable flats for sale, competitive rent prices, modern lifestyle, and strong job growth.', image: '/assets/images/blogs-title-card/blog29.webp', url: 'raipur-flats-for-sale-rent-price-trends', city: 'Raipur' },
    { id: 30, title: 'Godrej Properties Raipur Green Plots for Sale & Investment Opportunities', date: 'December 25, 2025', summary: 'Explore Godrej Properties Raipur - premium plots for sale with green amenities, biophilic design, and farm-style living on Old Dhamtari Road.', image: '/assets/images/blogs-title-card/blog30.webp', url: 'godrej-properties-raipur-green-plots', city: 'Raipur' },
    { id: 31, title: 'Godrej Raipur Township Property for Sale & Investment Opportunities', date: 'January 01, 2026', summary: 'Godrej Properties Raipur township offers premium plots, strong ROI, trusted titles, and rising demand among Raipur property buyers and brokers.', image: '/assets/images/blogs-title-card/blog31.webp', url: 'godrej-raipur-township-property-for-sale', city: 'Raipur' },
    { id: 32, title: 'Godrej Kharghar 5A IT Hub: The Future of Work in Navi Mumbai', date: 'January 03, 2026', summary: 'Explore the Godrej Kharghar 5A IT Hub - a state-of-the-art commercial complex designed for tech professionals and startups.', image: '/assets/images/blogs-title-card/blog32.webp', url: 'godrej-kharghar-5A-IT-hub', city: 'Navi Mumbai' },
    { id: 33, title: 'Godrej Kharghar Booking Guide: EOI, Allotment & Payment Plans', date: 'January 03, 2026', summary: 'Master the Godrej Kharghar booking process. Learn about EOI priority, allotment day, 10:90 payment plans, and why Navi Mumbai Big Four infra makes this a top buy.', image: '/assets/images/blogs-title-card/blog33.webp', url: 'godrej-kharghar-booking-process', city: 'Navi Mumbai' },
    { id: 34, title: 'Godrej Nagpur: Smart Living near Samruddhi Mahamarg & MIHAN', date: 'January 03, 2026', summary: 'Explore Godrej Nagpur\'s prime plots near Samruddhi Mahamarg. Enjoy 10-minute connectivity, high investment growth, and a nature-rich lifestyle in Maharashtra s heart.', image: '/assets/images/blogs-title-card/blog34.webp', url: 'godrej-nagpur-samruddhi-mahamarg', city: 'Nagpur' },
    { id: 35, title: 'Godrej Sector 5A Kharghar: Smart Homes & Future-Ready Tech', date: 'January 04, 2026', summary: 'Experience smart living at Godrej Sector 5A, Kharghar. Explore app-controlled homes, multi-layer security, and IGBC-certified green tech in Navi Mumbai\'s top node', image: '/assets/images/blogs-title-card/blog35.webp', url: 'godrej-kharghar-smart-homes', city: 'Navi Mumbai' },
    { id: 36, title: 'Godrej Capital Guide: Fast Sanctions, 10:90 Plans & RBI Benefits', date: 'January 04, 2026', summary: 'Unlock the Godrej Capital advantage: 24-hour digital sanctions, parallel funding, and 48-month interest-only EMIs. Learn how 2026 RBI norms lower your home loan costs. ', image: '/assets/images/blogs-title-card/blog36.webp', url: 'godrej-capital-disbursement', city: 'Navi Mumbai' },
    { id: 37, title: 'Aarohi Home Loan for Women: 2026 Guide to Godrej Home Ownership', date: 'January 05, 2026', summary: 'Unlock the Aarohi advantage for women: 0.10% interest cuts, 1% stamp duty rebates, and bundled health cover. Secure your legacy with Godrej Capital in 2026. ', image: '/assets/images/blogs-title-card/blog37.webp', url: 'godrej-properties', city: 'Nagpur' },
    { id: 38, title: 'How Are The Climatic Conditions at Nagpur in 2026', date: 'January 06, 2026', summary: 'Nagpur rapid urban growth is exacerbating the Urban Heat Island(UHI) effect, with built - up areas recording temperatures up to 5°C higher than green zones.', image: '/assets/images/blogs-title-card/blog38.webp', url: 'godrej-nagpur-climate', city: 'Nagpur' },
    { id: 39, title: 'Is Nagpur the Best Place to Invest Right Now? Let’s Look at the Numbers', date: 'January 06, 2026', summary: 'Check the latest 2026 growth data for Nagpur real estate. Exports doubled at MIHAN, with ₹ 12,700 cr in new projects and 58% price growth in Hingna. Best time to buy Godrej plots.', image: '/assets/images/blogs-title-card/blog39.webp', url: 'godrej-nagpur-mihan-exports', city: 'Nagpur' },
    { id: 40, title: 'Kharghar Sector 27: Investing in Navi Mumbai’s BKC 2.0 Growth', date: 'January 06, 2026', summary: 'Explore why Kharghar Sector 27 is the new BKC. With the International Corporate Park (BKC 2) and Godrej’s new launch, learn why homeowners are pivoting to this TOD hub.', image: '/assets/images/blogs-title-card/blog40.webp', url: 'godrej-kharghar-Belapur-kharghar-complext', city: 'Navi Mumbai' },
    { id: 41, title: 'KTLR Tunnel: The 10-Minute Commute Redefining Kharghar Real Estate', date: 'January 07, 2026', summary: 'The Kharghar-Turbhe Link Road (KTLR) cuts travel time to 10 minutes. Discover how this 1.8km tunnel connects Turbhe IT hubs to the luxury of Kharghar Sector 5A.', image: '/assets/images/blogs-title-card/blog41.webp', url: 'godrej-kharghar-turbhe-link-road', city: 'Navi Mumbai' },
    { id: 42, title: 'Walking-Distance Luxury: Godrej Kharghar near Metro & Golf Course', date: 'January 07, 2026', summary: ' Live within walking distance of the Navi Mumbai Metro, Golf Course, and Central Park. Discover why Godrej Kharghar is a scarcity asset in a high-demand node.', image: '/assets/images/blogs-title-card/blog42.webp', url: 'godrej-kharghar-metro-benefits', city: 'Navi Mumbai' },
    { id: 43, title: 'MIHAN 2026: Why Nagpur is India’s Newest Tech and Cargo Capital', date: 'January 07, 2026', summary: 'MIHAN is attracting HCL, Infosys, and global cargo giants. Learn why Nagpur’s "Zero Mile" advantage is driving the massive growth of Godrej Forest Estate.', image: '/assets/images/blogs-title-card/blog43.webp', url: 'godrej-nagpur-tech-capital', city: 'Nagpur' },
    { id: 44, title: 'Samruddhi Mahamarg: The 8-Hour Bridge Connecting Nagpur Families', date: 'January 08, 2026', summary: 'The Mumbai-Nagpur Expressway has reduced travel to 8 hours. Discover the emotional and financial ROI of owning a plot at Godrej Nagpur near Samruddhi Square.', image: '/assets/images/blogs-title-card/blog44.webp', url: 'godrej-nagpur-samruddhi-mahamarg-bridge-connectivity', city: 'Nagpur' },
    { id: 45, title: 'Pit-to-Port: The Economic Drivers of Godrej Forest Estate Nagpur', date: 'January 08, 2026', summary: 'Follow the money: How the Adani Lithium plant, MIHAN Cargo, and AIIMS are creating a 15.7% ROI growth ring around Godrej plots in Nagpur.', image: '/assets/images/blogs-title-card/blog45.webp', url: 'godrej-nagpur-natural-forest-estate', city: 'Nagpur' },
    { id: 46, title: 'Hill View vs. Water View: Godrej’s Visual Master Plan for 2026', date: 'January 09, 2026', summary: 'Choosing between Kharghar’s Parsik Hills and Nagpur’s natural canals? Explore the biophilic design and visual luxury of Godrej’s newest residential launches.', image: '/assets/images/blogs-title-card/blog46.webp', url: 'godrej-nagpur-natural-view', city: 'Nagpur' },
    { id: 47, title: 'How Pune Kharadi Shifted from Agricultural Roots to Pune’s Premier IT Corridor', date: 'January 12, 2026', summary: 'Kharadi has transformed into Punes premier IT corridor, marked by the two- phase growth centered on the EON Free Zone and WTC.It is a designated SEZ, attracting high - paying BFSI and Fintech jobs from global giants like Barclays.', image: '/assets/images/blogs-title-card/blog47.webp', url: 'kharadi-evolution-pune-it-corridor', city: 'Pune' },
    { id: 48, title: 'Kharadi vs. Hinjewadi: Why the East is Winning the Professional’s Choice', date: 'January 12, 2026', summary: 'This blog compares Kharadi and Hinjewadi, arguing that Kharadi is the superior choice for professionals prioritising a premium lifestyle and higher rental yields. While Hinjewadi is dominated by IT-service companies, Kharadi attracts high-income BFSI and Fintech professionals.', image: '/assets/images/blogs-title-card/blog48.webp', url: 'Kharadi-vs-hinjewadi-real-estate-comparison', city: 'Pune' },
    { id: 49, title: 'Vibrant Community of Kharadi: A Cosmopolitan Melting Pot', date: 'January 12, 2026', summary: 'Explore Kharadi’s unique demographic blend, where 53% North Indian and 37% local Marathi communities create an inclusive and celebratory neighborhood.', image: '/assets/images/blogs-title-card/blog49.webp', url: 'Kharadi-vibrant-cosmopolitan-community', city: 'Pune' },
    { id: 50, title: 'Future-Ready Infrastructure: The Backbone of Kharadi’s Real Estate Growth', date: 'January 12, 2026', summary: 'Learn how the upcoming Pune Metro Phase 2 (Line 4 & 2B) and the Ring Road project are set to boost Kharadis property values by up to 25%. ', image: '/assets/images/blogs-title-card/blog50.webp', url: 'Kharadi-future-ready-infrastructure-growth', city: 'Pune' },
    { id: 51, title: 'Nightlife and Social Life: Why Kharadi is Pune’s Most "Happening" Suburb', date: 'January 12, 2026', summary: 'From high-tech offices to high-energy bistros: Discover Kharadi transition from workday to social life. Proximity to major retail hubs like Phoenix Marketcity, (vibrant and safe social destination)', image: '/assets/images/blogs-title-card/blog51.webp', url: 'kharadi-nightlife-social-hub-pune', city: 'Pune' },
    { id: 52, title: 'Security and Safety: Living with Peace of Mind in Kharadi', date: 'January 12, 2026', summary: 'Explore Kharadi sophisticated layered protection model for security.Learn about high- tech Smart Safety features in Godrej projects', image: '/assets/images/blogs-title-card/blog52.webp', url: 'kharadi-security-safety-peace-of-mind', city: 'Pune' },
    { id: 53, title: 'Investment Potential: Why Kharadi is a ROI Powerhouse for 2026', date: 'January 12, 2026', summary: 'Unlock Kharadi potential as a real estate Goldmine with consistently high rental yields of 4.5% to 6%, and capital appreciation of 8-10% annually. The market is fueled by massive employment hubs like EON IT Park and the upcoming Pune Metro Phase 2 completion', image: '/assets/images/blogs-title-card/blog53.webp', url: 'kharadi-investment-potential-roi-powerhouse', city: 'Pune' },


];

// Sort posts by date descending
BlogsPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Helper to extract "Month YYYY" from date string
function getMonthYear(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
}

// Populate Filters Dynamically
function populateFilters() {
    const cityFilter = document.getElementById('city-filter');
    const dateFilter = document.getElementById('date-filter');

    // Get unique cities
    const cities = [...new Set(BlogsPosts.map(post => post.city))].sort();
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityFilter.appendChild(option);
    });

    // Get unique dates (Month Year)
    const dates = BlogsPosts.map(post => ({
        label: getMonthYear(post.date),
        rawDate: new Date(post.date)
    }));

    // Remove duplicates based on label
    const uniqueDates = [];
    const seenLabels = new Set();

    dates.forEach(d => {
        if (!seenLabels.has(d.label)) {
            seenLabels.add(d.label);
            uniqueDates.push(d);
        }
    });

    // Sort dates descending (newest month first)
    uniqueDates.sort((a, b) => b.rawDate - a.rawDate);

    uniqueDates.forEach(d => {
        const option = document.createElement('option');
        option.value = d.label;
        option.textContent = d.label;
        dateFilter.appendChild(option);
    });
}

function filterPosts() {
    const cityFilter = document.getElementById('city-filter');
    const dateFilter = document.getElementById('date-filter');

    const selectedCity = cityFilter.value;
    const selectedDate = dateFilter.value;

    const filteredPosts = BlogsPosts.filter(post => {
        const matchesCity = selectedCity === 'all' || post.city === selectedCity;
        const matchesDate = selectedDate === 'all' || getMonthYear(post.date) === selectedDate;
        return matchesCity && matchesDate;
    });

    renderBlogsCards(filteredPosts);
    updateUI(filteredPosts.length);
}

function updateUI(count) {
    const noResults = document.getElementById('no-results');
    const BlogsGrid = document.getElementById('Blogs-grid');
    const resultsCount = document.getElementById('results-count');

    if (count === 0) {
        noResults.classList.remove('hidden');
        BlogsGrid.classList.add('hidden');
        resultsCount.textContent = 'No posts found';
    } else {
        noResults.classList.add('hidden');
        BlogsGrid.classList.remove('hidden');
        resultsCount.textContent = `Showing ${count} post${count !== 1 ? 's' : ''}`;
    }
}

function renderBlogsCards(posts = BlogsPosts) {
    const BlogsGrid = document.getElementById('Blogs-grid');
    BlogsGrid.innerHTML = '';

    posts.forEach(post => {
        const BlogsCard = document.createElement('div');
        BlogsCard.className = 'bg-white rounded-lg shadow-lg overflow-hidden flex flex-col blog-card';
        BlogsCard.innerHTML = `
            <div class="relative">
                <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
                <span class="absolute top-2 right-2 bg-main-blue text-white text-xs font-bold px-2 py-1 rounded shadow">${post.city}</span>
            </div>
            <div class="p-6 flex-grow flex flex-col">
                <h3 class="text-xl font-bold text-main-blue mb-2">${post.title}</h3>
                <p class="text-gray-500 text-sm mb-4">${post.date}</p>
                <p class="text-gray-700 flex-grow mb-4">${post.summary}</p>
                <div class="mt-auto">
                    <a href="${post.url}" class="text-main-blue font-semibold hover:underline transition-colors duration-300">Read More &rarr;</a>
                </div>
            </div>
        `;

        BlogsCard.style.cursor = 'pointer';
        BlogsCard.addEventListener('click', (e) => {
            if (e.target.closest && e.target.closest('a')) return;
            window.location.href = post.url;
        });

        BlogsGrid.appendChild(BlogsCard);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    renderBlogsCards(); // Initial render with all posts

    // Event Listeners
    const cityFilter = document.getElementById('city-filter');
    const dateFilter = document.getElementById('date-filter');
    const resetBtn = document.getElementById('reset-filters');
    const consultationImage = document.getElementById('consultation-image');
    const consultNameInput = document.getElementById('consult-name');
    const consultForm = document.getElementById('consult-form');
    const consultationMsg = document.getElementById('consultation-msg');

    cityFilter.addEventListener('change', filterPosts);
    dateFilter.addEventListener('change', filterPosts);

    resetBtn.addEventListener('click', () => {
        cityFilter.value = 'all';
        dateFilter.value = 'all';
        filterPosts();
    });

    // Consultation image click listener (Scroll to form and focus)
    if (consultationImage && consultNameInput) {
        consultationImage.addEventListener('click', () => {
            document.getElementById('consultation-section').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                consultNameInput.focus();
            }, 500);
        });
    }

    // Consultation Form Logic
    consultForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('consult-name').value;
        const phone = document.getElementById('consult-phone').value;
        const email = document.getElementById('consult-email').value;
        const crmData = { name, phone, email, source: 'Free Expert Consultation (Blogs Page)' };
        const crmWebhookUrl = 'https://apps.cratiocrm.com/Customize/Webhooks/webhook.php?id=651654';
        try {
            await fetch(crmWebhookUrl, { method: 'POST', mode: 'no-cors', body: JSON.stringify(crmData) });
            consultationMsg.className = 'block bg-green-500 text-white text-center mt-4 p-3 rounded-lg font-semibold transition-opacity duration-300';
            consultationMsg.textContent = 'Message sent! We will contact you shortly.';
            if (document.getElementById('whatsapp-toggle').checked) {
                const whatsappMessage = `Hello, I'm interested in a free expert consultation. My name is ${name}, phone is ${phone}, and email is ${email}.`;
                window.location.href = `https://wa.me/917400400373?text=${encodeURIComponent(whatsappMessage)}`;
            }
        } catch (error) {
            console.error('Error submitting to CRM:', error);
            consultationMsg.className = 'block bg-red-500 text-white text-center mt-4 p-3 rounded-lg font-semibold transition-opacity duration-300';
            consultationMsg.textContent = 'There was an error sending your message. Please try again.';
        } finally {
            consultForm.reset();
            document.getElementById('consultation-section').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => { consultationMsg.className = 'hidden'; }, 5000);
        }
    });

    // Floating WhatsApp button logic
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.addEventListener('click', (e) => {
            e.preventDefault();
            const whatsappUrl = e.currentTarget.href;
            window.open(whatsappUrl, '_blank');
        });
    }

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
