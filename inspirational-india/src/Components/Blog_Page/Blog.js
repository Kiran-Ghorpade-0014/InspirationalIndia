import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import Paper from "@mui/material/Paper";
// import FeaturedPost from "./FeaturedPost";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Footer from "./Footer";
import { useParams } from 'react-router-dom';


import CommentBox from "./CommentBox";

const defaultTheme = createTheme();

export default function Blog() {
  const { blog_Id } = useParams();
  const [blog, setBlog] = React.useState([]);

  let mainFeaturedPost = {
    title: blog ? blog.name : "No Title Found",
    image: blog
      ? "data:image/png;base64," + blog.image
      : "public/images/north_east_india.jpg",
    imageText: "main image description",
  };

  React.useEffect(() => {
    fetch("http://localhost:8181/v1/blog/getBlog/"+blog_Id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        setBlog(response);
      })
      .catch((err) => console.error(err));
  }, [blog_Id]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="lg">
        <Header title="Blog" blogId={blog_Id} />
        <Grid
          container
          display="flex"
          flexDirection="row"
          alignItems="start"
          justifyContent="center"
          spacing={5}
        >
          <Grid
            item
            xs={12}
            md={8}
            xl={8}
            height="80vh"
            sx={{ overflowY: "scroll" }}
          >
            <main height={{ xl: "50vh", md: "50vh", xs: "100vh" }}>
              <MainFeaturedPost
                post={mainFeaturedPost}
                date={blog.upload_dateTime}
              />
              <Paper
                sx={{
                  position: "relative",
                  backgroundColor: "#700089",
                  color: "#fff",
                  mb: 4,
                }}
              >
                <Grid container>
                  <Grid item md={11}>
                    <Box
                      sx={{
                        position: "relative",
                        p: { xs: 3, md: 6, xl: 6 },
                        pr: { md: 0 },
                      }}
                    >
                      <Typography
                        variant="h6"
                        color="inherit"
                        paragraph
                        textAlign="justify"
                      >
                        {/* blog text */}
                        {blog ? blog.description : "No Content"}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
              {/* <Grid container spacing={2} xs={2}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid> */}
            </main>
            <Footer
              title="INSPIRATIONAL INDIA"
              description="Love India ❤️"
              sx={{ xs: { display: "none" } }}
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <CommentBox blogId={blog_Id}/>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
