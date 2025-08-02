// Gallery data for each collection
const galleryData = {
    gold: {
        title: "Gold Elegance Collection",
        items: [
            {
                image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw73e969c5/images/Mia/hi-res/3824FLW.jpg?sw=640&sh=640",
                title: "Classic Gold Ring",
                description: "18K gold band with diamond accents",
                price: "₹85,000"
            },
            {
                image: "https://www.caratlane.com/blog/wp-content/uploads/2022/08/First-salary-328-1-1.jpg",
                title: "Rose Gold Bracelet",
                description: "6K gold band with diamond accents",
                price: "₹85,000"
            },
            {
                image: "https://www.caratlane.com/blog/wp-content/uploads/2024/08/1A-56.jpg",
                title: "Gold Chain Necklace",
                description: "Elegant 22K gold chain with pendant",
                price: "₹1,25,000"
            },
            {
                image: "https://manubhai.in/SocialMedia/post_artworks/DCBE00543.jpg",
                title: "Gold Earrings",
                description: "Delicate drop earrings in yellow gold",
                price: "₹45,000"
            },
            {
                image: "https://cdn-image.blitzshopdeck.in/ShopdeckCatalogue/tr:f-webp,w-600,fo-auto/64b7c91d3a2c4600127d44a9/media/Kadli-001_1701173149151_gpqi76dx4d1bu9f.jpg",
                title: "Gold Bracelet",
                description: "Sophisticated link bracelet",
                price: "₹95,000"
            },
            {
                image: "https://i.etsystatic.com/40226048/r/il/4cbb71/5523229373/il_570xN.5523229373_eyce.jpg",
                title: "Gold Wedding Band Set",
                description: "Matching his & hers wedding bands",
                price: "₹1,50,000"
            },
            {
                image: "https://www.vummidi.com/blog/wp-content/uploads/2024/08/Divine-Temple-Jewellery-Set.jpg",
                title: "Gold Bridal Set ",
                description: "Bold cocktail ring with emerald",
                price: "₹2,25,000"
            }
        ]
    },
    silver: {
        title: "Silver Serenity Collection",
        items: [
            {
                image: "https://img.tatacliq.com/images/i18//437Wx649H/MP000000022846981_437Wx649H_202407081949231.jpeg",
                title: "Silver Chain Necklace",
                description: "Sterling silver rope chain",
                price: "₹8,500"
            },
            {
                image: "https://liorajewels.in/cdn/shop/files/0Z7A2562_edit.jpg?v=1703566958",
                title: "Silver Hoop Earrings",
                description: "Classic medium hoop earrings",
                price: "₹6,200"
            },
            {
                image: "https://5.imimg.com/data5/SELLER/Default/2024/4/406445689/HN/LG/MD/188414932/6-3-500x500.png",
                title: "Silver Tennis Bracelet",
                description: "CZ stones in silver setting",
                price: "₹15,000"
            },
            {
                image: "https://us.abbottlyon.com/cdn/shop/files/April_Eccom_AL9335.jpg?v=1744012381",
                title: "Silver Signet Ring",
                description: "Personalized signet ring",
                price: "₹12,000"
            },
            {
                image: "https://www.mannash.in/cdn/shop/products/MZSJPS542D1288_ba4eb9cd-10a9-4eab-913d-16a8464a13d5.jpg?v=1678532767",
                title: "Silver Pendant Set",
                description: "Heart pendant with matching earrings",
                price: "₹18,500"
            },
            {
                image: "https://assets.ajio.com/medias/sys_master/root/20231018/foYJ/65301087afa4cf41f54e4029/-473Wx593H-466720973-silver-MODEL11.jpg",
                title: "Silver Cuff Bracelet",
                description: "Wide oxidized silver cuff",
                price: "₹22,000"
            }
        ]
    },
    gemstone: {
        title: "Gemstone Glory Collection",
        items: [
            {
                image: "https://manubhai.in/SocialMedia/post_artworks/DBBE06643.jpg",
                title: "Diamond Mangalasutra",
                description: "6 carat diamond in black bead setting",
                price: "₹3,25,000"
            },
            {
                image: "https://assets.ajio.com/medias/sys_master/root/20241111/rQIF/67320095260f9c41e8cd724c/-473Wx593H-469330929-white-MODEL.jpg",
                title: "Diamond Solitaire Ring",
                description: "1 carat diamond in platinum setting",
                price: "₹3,50,000"
            },
            {
                image: "https://kinclimg5.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BISM0016D01_YAA18DIG6SYEMXXXX_ABCD00-PICS-00004-1024-13516.png",
                title: "Emerald Drop Earrings",
                description: "Natural emeralds with diamond halos",
                price: "₹2,25,000"
            },
            {
                image: "https://jianlondon.co.uk/prodimages/Large/n65424.jpg",
                title: "Ruby Tennis Necklace",
                description: "Burmese rubies in gold setting",
                price: "₹5,75,000"
            },
            {
                image: "https://rubans.in/cdn/shop/files/rubans-rhodium-plated-blue-sapphire-white-cubiczirconia-studded-adjustable-cocktail-ring-finger-rings-1143859819_1800x1800.jpg?v=1751564365",
                title: "Sapphire Cocktail Ring",
                description: "Blue sapphire with diamond surround",
                price: "₹4,25,000"
            },
            {
                image: "https://www.nafisadesigns.com/media/catalog/product/cache/3893803f2ab3f3c4bbb693381a6901b3/e/c/ecbr656-6.jpg",
                title: "Mixed Gemstone Bracelet",
                description: "Multi-colored precious stones",
                price: "₹3,85,000"
            },
            {
                image: "https://www.bada.org/sites/default/files/styles/large/public/object/2018-01-16/Tiara.jpg?itok=syw8plAw",
                title: "Diamond Tiara",
                description: "Vintage-inspired bridal tiara",
                price: "₹8,50,000"
            }
        ]
    }
};

// Filter Products Function
function filterProducts() {
    const metalFilter = document.getElementById('metal-filter').value;
    const weightFilter = document.getElementById('weight-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const items = document.querySelectorAll('.collection-item');

    items.forEach(item => {
        const metal = item.dataset.metal;
        const weight = item.dataset.weight;
        const price = item.dataset.price;

        const metalMatch = metalFilter === 'all' || metal === metalFilter;
        const weightMatch = weightFilter === 'all' || weight === weightFilter;
        const priceMatch = priceFilter === 'all' || price === priceFilter;

        if (metalMatch && weightMatch && priceMatch) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            item.style.display = 'none';
        }
    });
}

// Open Gallery Modal
function openGallery(type) {
    const modal = document.getElementById('galleryModal');
    const modalTitle = document.getElementById('modalTitle');
    const galleryGrid = document.getElementById('galleryGrid');
    
    const collection = galleryData[type];
    modalTitle.textContent = collection.title;
    
    // Clear existing content
    galleryGrid.innerHTML = '';
    
    // Populate gallery items
    collection.items.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x250/ddd/999?text=Jewelry+Image'">
            <div class="gallery-item-info">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                <div class="price">${item.price}</div>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Gallery Modal
function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        closeGallery();
    }
};

