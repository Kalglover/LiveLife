import './Categories.css';

const Categories = () => {


    
    return (
        <div id="categories-container">
            <h2 id="categories-heading">Categories</h2>        
            <div id="categories-grid-container">
                <div className="category-container">
                    <img className="category-image" src="src/assets/categories/ElectronicsCategory.jpg" />
                    <div className="category-text-container">
                        <p>Electronics</p>
                    </div>
                </div>

                <div className="category-container">
                    <img className="category-image" src="src/assets/categories/FashionCategory.jpg" />
                    <div className="category-text-container">
                        <p>Fashion</p>
                    </div>
                </div>

                <div className="category-container">
                    <img className="category-image" src="src/assets/categories/HomeKitchenCategory.jpg" />
                    <div className="category-text-container">
                        <p>Home & Kitchen</p>
                    </div>
                </div>

                <div className="category-container">
                    <img className="category-image" src="src/assets/categories/HealthFitnessCategory.jpg" />
                    <div className="category-text-container">
                        <p>Health & Fitness</p>
                    </div>
                </div>

                <div className="category-container">
                    <img className="category-image" src="src/assets/categories/SportsOutdoorCategory.jpg" />
                    <div className="category-text-container">
                        <p>Sports & Outdoor</p>
                    </div>
                </div>

                <div className="category-container">
                    <img className="category-image" src="src/assets/categories/BooksMediaCategory.jpg" />
                    <div className="category-text-container">
                        <p>Books & Media</p>
                    </div>
                </div>

                <div className="category-container">
                    <img className="category-image" src="src/assets/categories/ToysGamesCategory.jpg" />
                    <div className="category-text-container">
                        <p>Toys & Games</p>
                    </div>
                </div>

                <div className="category-container">
                    <img className="category-image" src="src/assets/categories/AutomotiveCategory.jpg" />
                    <div className="category-text-container">
                        <p>Automotive</p>
                    </div>
                </div>

                <div className="category-container">
                    <img className="category-image" src="src/assets/categories/PetSuppliesCategory.jpg" />
                    <div className="category-text-container">
                        <p>Pet Supplies</p>
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default Categories;