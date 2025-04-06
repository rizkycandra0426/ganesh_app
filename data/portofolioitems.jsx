const portfolioItems = {
  "Desain Bangunan": [
    { 
      id: 1, 
      name: "Modern Minimalist House", 
      thumbnail: "/portfolio1.jpg", 
      location: "Jakarta, Indonesia",
      images: ["/portfolio1-1.jpg", "/portfolio1-2.jpg", "/portfolio1-3.jpg", "/portfolio1-4.jpg"],
      landArea: "250 m²",
      buildingArea: "180 m²",
      duration: "8 months",
      description: "A sleek modern home with clean lines and open spaces, designed for urban living.",
      features: [
        "Open floor plan concept",
        "Floor-to-ceiling windows",
        "Minimalist interior design",
        "Smart home technology"
      ]
    },
    { 
        id: 2, 
        name: "Tropical Resort Villa", 
        thumbnail: "/portfolio2.jpg", 
        location: "Bali, Indonesia",
        images: ["/portfolio2-1.jpg", "/portfolio2-2.jpg", "/portfolio2-3.jpg", "/portfolio2-4.jpg"],
        landArea: "500 m²",
        buildingArea: "300 m²",
        duration: "12 months",
        description: "Luxury villa blending indoor and outdoor living with tropical landscaping.",
        features: [
          "Infinity pool with ocean view",
          "Open-air living spaces",
          "Traditional Balinese elements",
          "Lush tropical garden"
        ]
      },
      { 
        id: 3, 
        name: "Urban Apartment", 
        thumbnail: "/portfolio3.jpg", 
        location: "Surabaya, Indonesia",
        images: ["/portfolio3-1.jpg", "/portfolio3-2.jpg", "/portfolio3-3.jpg", "/portfolio3-4.jpg"],
        landArea: "120 m²",
        buildingArea: "90 m²",
        duration: "5 months",
        description: "Compact yet functional apartment design for young professionals.",
        features: [
          "Space-saving solutions",
          "Modern kitchenette",
          "Built-in storage",
          "Balcony with city view"
        ]
      },
      { 
        id: 4, 
        name: "Classic Javanese House", 
        thumbnail: "/portfolio4.jpg", 
        location: "Yogyakarta, Indonesia",
        images: ["/portfolio4-1.jpg", "/portfolio4-2.jpg", "/portfolio4-3.jpg", "/portfolio4-4.jpg"],
        landArea: "350 m²",
        buildingArea: "220 m²",
        duration: "10 months",
        description: "Traditional Javanese architecture with modern amenities.",
        features: [
          "Joglo-style roof",
          "Hand-carved wooden elements",
          "Inner courtyard",
          "Contemporary plumbing"
        ]
      },
  ],
      "Desain Interior" :[
        { 
          id: 5, 
          name: "Classic Villa", 
          thumbnail: "/portfolio5.jpg", 
          location: "Yogyakarta, Indonesia",
          images: ["/portfolio5-1.jpg", "/portfolio5-2.jpg", "/portfolio5-3.jpg", "/portfolio5-4.jpg"],
          landArea: "400 m²",
          buildingArea: "280 m²",
          duration: "14 months",
          description: "European-inspired villa with luxurious finishes.",
          features: [
            "Marble flooring",
            "Grand staircase",
            "Formal dining room",
            "Landscaped gardens"
          ]
        },
        { 
          id: 6, 
          name: "Scandinavian Home", 
          thumbnail: "/portfolio6.jpg", 
          location: "Bali, Indonesia",
          images: ["/portfolio6-1.jpg", "/portfolio6-2.jpg", "/portfolio6-3.jpg", "/portfolio6-4.jpg"],
          landArea: "300 m²",
          buildingArea: "200 m²",
          duration: "9 months",
          description: "Light-filled home with natural materials and minimalist design.",
          features: [
            "White oak flooring",
            "Minimalist fireplace",
            "Large skylights",
            "Functional storage solutions"
          ]
        },
        { 
          id: 7, 
          name: "Industrial Loft", 
          thumbnail: "/portfolio7.jpg", 
          location: "Jakarta, Indonesia",
          images: ["/portfolio7-1.jpg", "/portfolio7-2.jpg", "/portfolio7-3.jpg", "/portfolio7-4.jpg"],
          landArea: "200 m²",
          buildingArea: "150 m²",
          duration: "6 months",
          description: "Urban loft featuring exposed materials and open spaces.",
          features: [
            "Exposed brick walls",
            "Concrete floors",
            "Steel beam ceilings",
            "Open concept living"
          ]
        },
        { 
          id: 8, 
          name: "Elegant Dining Room", 
          thumbnail: "/portfolio8.jpg", 
          location: "Surabaya, Indonesia",
          images: ["/portfolio8-1.jpg", "/portfolio8-2.jpg", "/portfolio8-3.jpg", "/portfolio8-4.jpg"],
          landArea: "180 m²",
          buildingArea: "120 m²",
          duration: "4 months",
          description: "Sophisticated dining space with custom cabinetry and lighting.",
          features: [
            "Custom chandelier",
            "Built-in buffet",
            "Wine storage",
            "Formal seating for 12"
          ]
        },
      ],
      // 6 NEW DUMMY ITEMS ADDED BELOW
     "Hasil Kontruksi":[
      { 
        id: 9, 
        name: "Coastal Retreat", 
        thumbnail: "/portfolio9.jpg", 
        location: "Lombok, Indonesia",
        images: ["/portfolio9-1.jpg", "/portfolio9-2.jpg", "/portfolio9-3.jpg", "/portfolio9-4.jpg"],
        landArea: "450 m²",
        buildingArea: "320 m²",
        duration: "11 months",
        description: "Beachfront property with panoramic ocean views and breezy interiors.",
        features: [
          "Wraparound veranda",
          "Infinity-edge pool",
          "Beach access",
          "Natural ventilation design"
        ]
      },
    { 
      id: 10, 
      name: "Mountain Cabin", 
      thumbnail: "/portfolio10.jpg", 
      location: "Bandung, Indonesia",
      images: ["/portfolio10-1.jpg", "/portfolio10-2.jpg", "/portfolio10-3.jpg", "/portfolio10-4.jpg"],
      landArea: "600 m²",
      buildingArea: "250 m²",
      duration: "10 months",
      description: "Rustic yet modern cabin nestled in the mountains with stunning views.",
      features: [
        "Stone fireplace",
        "Large picture windows",
        "Outdoor hot tub",
        "Sustainable materials"
      ]
    },
    {
        id: 11,
        name: "Luxury Living Room",
        thumbnail: "/portfolio1.jpg",
        images: ["/portfolio1.jpg", "/portfolio2.jpg", "/portfolio3.jpg", "/portfolio4.jpg", "/portfolio5.jpg"],
        location: "Jakarta, Indonesia",
        landArea: "350 m²",
        buildingArea: "280 m²",
        duration: "8 months",
        description: "Elegant living space with premium materials and custom furniture designs. Features a minimalist aesthetic with warm wood accents and floor-to-ceiling windows.",
        features: ["Custom built-in shelving", "Italian marble flooring", "Smart home integration", "Ergonomic furniture"]
      },
      {
        id: 12,
        name: "Modern Office Space",
        thumbnail: "/portfolio2.jpg",
        images: ["/portfolio6.jpg", "/portfolio7.jpg", "/portfolio8.jpg", "/portfolio9.jpg", "/portfolio10.jpg"],
        location: "Bandung, Indonesia",
        landArea: "500 m²",
        buildingArea: "320 m²",
        duration: "6 months",
        description: "Contemporary workspace designed for productivity and collaboration. Includes open-plan areas, private offices, and relaxation zones.",
        features: ["Acoustic paneling", "LED lighting system", "Modular workstations", "Green wall feature"]
      },
      {
        id: 13,
        name: "Cozy Bedroom",
        thumbnail: "/portfolio3.jpg",
        images: ["/portfolio11.jpg", "/portfolio12.jpg", "/portfolio13.jpg", "/portfolio14.jpg", "/portfolio15.jpg"],
        location: "Surabaya, Indonesia",
        landArea: "200 m²",
        buildingArea: "150 m²",
        duration: "4 months",
        description: "Warm and inviting bedroom retreat with custom cabinetry and premium textiles. Designed for maximum comfort and relaxation.",
        features: ["Walk-in wardrobe", "Blackout window treatments", "Built-in bedside tables", "Soundproof walls"]
      },
      {
        id: 14,
        name: "Minimalist Kitchen",
        thumbnail: "/portfolio4.jpg",
        images: ["/portfolio16.jpg", "/portfolio17.jpg", "/portfolio18.jpg", "/portfolio19.jpg", "/portfolio20.jpg"],
        location: "Bali, Indonesia",
        landArea: "300 m²",
        buildingArea: "180 m²",
        duration: "5 months",
        description: "Sleek kitchen design with hidden storage and high-end appliances. Features a clean aesthetic with functional workflow optimization.",
        features: ["Quartz countertops", "Integrated appliances", "Pull-out pantry", "Under-cabinet lighting"]
      },
    
     ],
    };
  
  export default portfolioItems;