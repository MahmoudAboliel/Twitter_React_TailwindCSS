
const Happens = () => {

    const happens = [
        {happen: '#Palestine', tweets: '29k Tweets'},
        {happen: '#Palestine', tweets: '29k Tweets'},
        {happen: '#Palestine', tweets: '29k Tweets'},
    ];

  return (
    <div className="happens-section">
        <p className="happen-title">What&apos;s happening</p>
        {happens.map((happen, index) => (
            <p key={index} className="happen-text">
                #Palestine <br /> 
                <span className="text-sm text-tsl dark:text-tsd">
                    29k Tweets
                </span>
            </p>
        ))}
        <button className="more-btn">Show More</button>
    </div>
  );
}

export default Happens;