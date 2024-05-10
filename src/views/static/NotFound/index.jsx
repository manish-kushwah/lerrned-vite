const NotFound = () => {
  return (
    <div>
      <h2>Error 404</h2>
      <div>Sorry we couldn&apos;t find the page/records you&apos;re looking for</div>
      <br />
      <button onClick={() => (window.location.href = "/")}>Home</button>
    </div>
  );
};

export default NotFound;
