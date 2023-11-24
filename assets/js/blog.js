document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");
    const blogData = [
        {
            "id": 1,
            "title": "2023 Sahil Gupta as a Cashlelo Digital Performance Network representative.",
            "description": "📢 Breaking News! 🎮 Our very own gaming enthusiast, Sahil Gupta, is all set to level up at the upcoming Game Summit in Bangalore! 🕹️ We are thrilled to announce that Sahil Gupta will be representing our team at this prestigious event, showcasing our dedication to the gaming industry and our commitment to staying at the forefront of innovation. The Game Summit in Bangalore is a hub for visionaries and trailblazers in the gaming world, and we couldn't be prouder to have Sahil Gupta as a Cashlelo Digital Performance Network representative. Stay tuned for updates from the summit as Sahil Gupta dives into the latest gaming trends, connects with industry leaders, and brings back valuable insights to help us level up our game! #Cashlelo #GameSummit #GamingIndustry #Representing #Innovation",
            "img": "./assets/images/sahil.jpg",
            "link": "www.google.com"
        },
        {
            "id": 2,
            "title": "Binit Choudhary Joins Our Team to Lead Technological Advancements",
            "description": "🎉 Exciting News! 🚀\n\nToday, we are thrilled to introduce the newest addition to our team who will be at the helm of our technology solutions! 🌟\n\nPlease join us in welcoming Binit Choudhary as our Technology Solutions Leader! 🌐\n\nBinit Choudhary brings a wealth of experience and expertise to our organization, with a proven track record of driving innovation and delivering cutting-edge tech solutions. With their visionary leadership, we are confident in our ability to tackle the most complex challenges and pave the way for a brighter, tech-powered future.\n\nAs we continue to grow and evolve, Binit will play a pivotal role in shaping our technological landscape, ensuring that we remain at the forefront of our industry.\n\nHere's to new beginnings and endless possibilities! 🚀\n\n#NewHire #TechLeader #Innovation #TeamGrowth #WelcomeAboard #Cashlelo",
            "img": "./assets/images/binit-img.png",
            "link": "https://www.linkedin.com/posts/cashlelo-mobile-network_newhire-techleader-innovation-activity-7107263311896850432-UlXw?utm_source=share&utm_medium=member_desktop"
        },
        {
            "id": 3,
            "title": "Ajeet Kumar (ajita77598) Joins Our Team to Senior Media Manager",
            "description": "🎉 Exciting News! 🚀\n\nToday, we are thrilled to introduce the newest addition to our team who will be at the helm of our technology solutions! 🌟\n\nPlease join us in welcoming Ajeet as our Technology Solutions Leader! 🌐\n\nBinit Choudhary brings a wealth of experience and expertise to our organization, with a proven track record of driving innovation and delivering cutting-edge tech solutions. With their visionary leadership, we are confident in our ability to tackle the most complex challenges and pave the way for a brighter, tech-powered future.\n\nAs we continue to grow and evolve, Binit will play a pivotal role in shaping our technological landscape, ensuring that we remain at the forefront of our industry.\n\nHere's to new beginnings and endless possibilities! 🚀\n\n#NewHire #TechLeader #Innovation #TeamGrowth #WelcomeAboard #Cashlelo",
            "img": "./assets/images/ajeet.jpeg",
            "link": "https://www.linkedin.com/feed/update/urn:li:activity:7114883446597967873/"
        },
        {
            "id": 4,
            "title": "Cashlelo Welcomes Sankalp Singh as VP- Sales: A New Visionary Leader in the World of Influencer Marketing and Coupons",
            "description": `🎉 Cashlelo Welcomes Sankalp Singh as VP- Sales: A New Visionary Leader in the World of Influencer Marketing and Coupons
            ANI - https://aninews.in/news/business/business/cashlelo-welcomes-sankalp-singh-as-vp-sales-a-new-visionary-leader-in-the-world-of-influencer-marketing-and-coupons20231102172450/

Dailyhunt - https://m.dailyhunt.in/news/india/english/ani67917250816496966-epaper-anieng/cashlelo+welcomes+sankalp+singh+as+vp+sales+a+new+visionary+leader+in+the+world+of+influencer+marketing+and+coupons-newsid-n552985816?listname=newspaperLanding&topic=business&index=10&topicIndex=3&mode=pwa&action=click

The Print - https://theprint.in/ani-press-releases/cashlelo-welcomes-sankalp-singh-as-vp-sales-a-new-visionary-leader-in-the-world-of-influencer-marketing-and-coupons/1829300/

Zee5 - https://www.zee5.com/articles/indian-stocks-extend-gains-after-us-feds-steady-monetary-policy-approach

Latestly - https://www.latestly.com/agency-news/business-news-cashlelo-welcomes-sankalp-singh-as-vp-sales-a-new-visionary-leader-in-the-world-of-influencer-marketing-and-coupons-5534120.html`,
            "img": "./assets/images/sankalp.png",
            "link": "https://aninews.in/news/business/business/cashlelo-welcomes-sankalp-singh-as-vp-sales-a-new-visionary-leader-in-the-world-of-influencer-marketing-and-coupons20231102172450/"
        },
    ];

    function openBlogPage(id) {
        const blogPost = blogData.find(post => post.id === id);
        if (blogPost) {
            // Create a unique URL for each blog post
            const blogPageURL = `blogPage.html?id=${id}`;
            const blogPage = window.open(blogPageURL, "_blank");
        }
    }

    // Function to create blog list items
    function createBlogListItem(post) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="blog-card grid">
                <figure class="card-banner img-holder">
                    <img src="${post.img}" alt="${post.title}" class="img-cover">
                </figure>
                <div class="card-content">
                    <h3 class="h3">
                        <a href="#" class="card-title" data-id="${post.id}">${post.title}</a>
                    </h3>
                </div>
            </div>
        `;
        return listItem;
    }

    // Populate the blog list
    blogData.forEach(post => {
        const listItem = createBlogListItem(post);
        blogList.appendChild(listItem);
    });

    // Add click event listener to blog post links
    blogList.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
            e.preventDefault();
            const id = parseInt(e.target.getAttribute("data-id"));
            openBlogPage(id);
        }
    });
});
