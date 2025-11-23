import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          style={{
            fontWeight: selectedCategory === cat ? "bold" : "normal",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
