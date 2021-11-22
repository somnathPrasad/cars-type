export default function RandomBox() {
  return (
    <div>
      <div className="fixed left-50 top-35 bg-red_box w-36 h-36 rounded transform rotate-30 shadow-box_shadow"></div>
      <div className="fixed top-0 left-0 bg-red_box w-36 h-36 rounded transform rotate-40 shadow-box_shadow"></div>
      <div className="fixed inset-y-10 inset-x-80 bg-red_box w-36 h-36 rounded transform rotate-75 shadow-box_shadow"></div>
      <div className="fixed inset-y-60 inset-x-20 bg-red_box w-36 h-36 rounded transform rotate-65 shadow-box_shadow"></div>
      <div className="fixed inset-y-80 inset-x-75 bg-red_box w-36 h-36 rounded transform rotate-45 shadow-box_shadow"></div>
    </div>
  );
}
