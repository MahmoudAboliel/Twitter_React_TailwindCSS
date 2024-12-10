/* eslint-disable react/prop-types */

const FollowsCard = ({userName, userMail, userImg}) => {
  return (
    <div className="follows-card">
        <img src={userImg} alt="" className="rounded-full" />
        <h3 className="text-tpl dark:text-tpd leading-[12px]">
            {userName}<br />
            <span className="text-sm text-tsl dark:text-tsd">
                {userMail}
            </span>
        </h3>
        <button className="card-btn">
        Follow
        </button>
    </div>
  );
}

export default FollowsCard;