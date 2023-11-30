

export default function Add({ color, size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} className="bi bi-plus-lg" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
    </svg>
  )
};

Add.defaultProps = {
  color: '#fff',
  size: '28px'
};