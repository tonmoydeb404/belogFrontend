const CategoryBadge = ({ title, count }) => {
  return (
    <button className="flex items-stretch border border-neutral rounded overflow-hidden">
      <span className="inline-flex text-[15px] items-center justify-center px-2 py-1">
        {title}
      </span>
      {count ? (
        <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-sm bg-neutral">
          {count}
        </span>
      ) : null}
    </button>
  );
};

export default CategoryBadge;
