import { useState, useEffect } from 'react';
// import '/public/assets/css/dropdown.css';
import '/public/assets/css/listing.css';

const CategoriesDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Membaca status terakhir dari localStorage saat komponen dimuat
  useEffect(() => {
    const lastSelectedCategory = localStorage.getItem('selectedCategory');
    if (lastSelectedCategory) {
      setSelectedCategory(lastSelectedCategory);
    }
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const applyFilter = () => {
    if (selectedCategory === 'Alat Sekolah') {
      window.location.href = '/AlatSekolah';
    } else if (selectedCategory === 'Souvenir') {
      window.location.href = '/Souvenir';
    } else {
      // Kategori Lainnya
    }
  };

  // Menyimpan status terakhir kategori yang dipilih ke localStorage
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
              <label className="container_check">Alat Sekolah
                <input type="checkbox" checked={selectedCategory === 'Alat Sekolah'} />
                <span className="checkmark"></span>
              </label>
            </li>
            <li onClick={() => handleCategoryChange('Souvenir')}>
              <label className="container_check">Souvenir
                <input type="checkbox" checked={selectedCategory === 'Souvenir'} />
                <span className="checkmark"></span>
              </label>
            </li>
            {/* Add other category options here */}
          </ul>
          {selectedCategory && (
            <a href="#0" className="apply_filter" onClick={applyFilter}>
              Terapkan
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesDropdown;
