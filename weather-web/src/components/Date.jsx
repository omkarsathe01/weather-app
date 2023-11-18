const DateComponent = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", options);
  
    return <div>{formattedDate}</div>;
};

export default DateComponent;