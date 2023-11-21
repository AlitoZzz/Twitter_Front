const FollowButton = ({ buttonState, setButtonState }) => {
  const handleClick = () => {
    if (buttonState === 1) {
      setButtonState(2);
    } else if (buttonState === 3) {
      setButtonState(1);
    }
  };

  const handleMouseEnter = () => {
    if (buttonState === 2) {
      setButtonState(3);
    }
  };

  const handleMouseLeave = () => {
    if (buttonState === 3) {
      setButtonState(2);
    }
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`btn btn-${
        buttonState === 1 ? "light" : buttonState === 2 ? "dark" : "danger"
      }`}
      style={{
        borderRadius: "50px",
        border: buttonState === 3 ? "1px solid red" : "1px solid white",
        color:
          buttonState === 3 ? "red" : buttonState === 2 ? "white" : "black",
        backgroundColor:
          buttonState === 1
            ? "white"
            : buttonState === 2
            ? "#15202b"
            : "rgba(255, 0, 0, 0.06)",
      }}
    >
      {buttonState === 1
        ? "Follow"
        : buttonState === 2
        ? "Following"
        : "Unfollow"}
    </button>
  );
};

export default FollowButton;
