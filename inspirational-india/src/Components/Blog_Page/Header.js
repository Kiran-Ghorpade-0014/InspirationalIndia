import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Header(props) {
  const [like, setLike] = React.useState({ icon: "🤍", likeCount: 200 });
  const [totalLikes, setTotalLikes] = React.useState(0);
  let user_id = sessionStorage.getItem("userid");

  const fetchStatus = () => {
    // setLike({ icon: "🤍", likeCount: 200 });
    fetch(`http://localhost:8181/v1/Like/isLiked/${props.blogId}/${user_id}`, {
      method: "GET",
      // headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200)
          setLike({
            icon: "❤️",
            likeCount: totalLikes,
          });
      })
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    fetch(`http://localhost:8181/v1/Like/getTotalLikes/${props.blogId}`, {
      method: "GET",
    })
      .then((response)=> response.json())
      .then((response) => {
        setTotalLikes(response);
      })
      .catch((err) => console.error(err));

    if (sessionStorage.getItem("userType") === "null") {
      setLike({ icon: "🤍", likeCount: totalLikes });
    } else {
      return fetchStatus();
    }
  }, [props.blogId, totalLikes, setLike]);

  const likeHandler = () => {
    if (like.icon === "🤍" && sessionStorage.getItem("userType") === "USER") {
      const formData = new FormData();
      formData.append("blog", props.blogId);
      formData.append("user", user_id);

      fetch("http://localhost:8181/v1/Like/add", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.status === 200){
            setLike({
              icon: "❤️",
              likeCount: totalLikes,
            });
          }
          else alert("Internal Server Error Occurred.\nTry after some time");
        })
        .catch((e) => {
          alert("Cannot able to like");
          console.log(e);
        });
    } 
  };

  React.useEffect(() => {
    // fetchStatus();
  });

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "white", color: "white" }}>
        <Button
          size="large"
          variant="outlined"
          sx={{ color: "white", borderColor: "white" }}
          onClick={likeHandler}
        >
          {like.icon} {like.likeCount}
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {props.title}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      ></Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
