import { useState, useEffect } from 'react';
// import '/public/assets/css/dropdown.css';
import '/public/assets/css/listing.css';
import { Link, useNavigate } from 'react-router-dom';

const CategoriesDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Read last selected category from localStorage on component mount
  useEffect(() => {
    const lastSelectedCategory = localStorage.getItem('selectedCategory');
    if (lastSelectedCategory) {
      setSelectedCategory(lastSelectedCategory);
    }
  }, []);

  const handleCategoryChange = (category: string) => {
    // Update selectedCategory only if it's different
    if (category !== selectedCategory) {
      setSelectedCategory(category);
    }

    // Navigate to the corresponding page using useNavigate
    const navigate = useNavigate();
    navigate(`/${category}`);
  };

  // Save selected category to localStorage on change
  useEffect(() => {
    localStorage.setItem('selectedCategory', selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="dropdown">
      <button className="drop">
        {selectedCategory ? selectedCategory : "Pilih Kategori"}
      </button>
      <div className="dropdown-menu">
        <div className="filter_type">
          <ul>
            <li onClick={() => handleCategoryChange('Alat Sekolah')}>
              <Link to="/AlatSekolah">Alat Sekolah</Link>
            </li>
            <li onClick={() => handleCategoryChange('Souvenir')}>
              <Link to="/Souvenir">Souvenir</Link>
            </li>
            <li onClick={() => handleCategoryChange('Hiasan')}>
              <Link to="/Hiasan">Hiasan</Link>
            </li>
            <li onClick={() => handleCategoryChange('Pupuk')}>
              <Link to="/Pupuk">Pupuk</Link>
            </li>
            {/* Add other category options here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDropdown;
