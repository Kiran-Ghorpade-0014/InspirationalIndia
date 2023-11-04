import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import Paper from "@mui/material/Paper";
import FeaturedPost from "./FeaturedPost";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Main from './Main';
import Footer from "./Footer";
import { Message } from "@mui/icons-material";
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: '../../../public/images/north_east_india.jpg',
  imageText: "main image description",
};

const featuredPosts = [
  {
    title: "Featured post1",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    // image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  {
    title: "Featured post2",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    // image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  {
    title: "Featured post3",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    // image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
];

// const posts = [post1, post2, post3];
const blogText=
"The Himalayan Region in northern India is a stunning and geographically diverse area known for its magnificent mountain ranges and breathtaking landscapes. Here is some information about the Himalayan Region:  <h4> Himalayan Region: - </h4>  **Geography:** The Himalayan region covers a vast expanse along the northern borders of India, stretching across several states and union territories, including Jammu and Kashmir, Himachal Pradesh, Uttarakhand, Sikkim, and Arunachal Pradesh. It is characterized by its towering peaks, deep valleys, and a rugged, challenging terrain. - **Tribes in the Himalayan Region:** This region is home to various Scheduled Tribes, some of which include the Gaddi and Gujjar tribes: - **Gaddi Tribe:** The Gaddi people primarily reside in the hilly areas of Himachal Pradesh. They have a unique culture and way of life, often dependent on animal husbandry, especially sheep and goats. The Gaddi are known for their colorful attire, traditional songs, and dances. - **Gujjar Tribe:** The Gujjar community is spread across multiple northern states, including Himachal Pradesh, Jammu and Kashmir, and parts of Uttarakhand. They are traditionally involved in cattle rearing and are known for their semi-nomadic lifestyle. - **Cultural Significance:** The Himalayan Region is culturally rich, with a deep connection to nature and spirituality. The indigenous tribes in this area have their own distinct languages, traditions, and rituals. Many of them celebrate festivals related to their agricultural practices and the changing seasons. - **Economy:** Due to the challenging terrain, the economy of the Himalayan region is often based on agriculture, animal husbandry, and, in some areas, tourism. The region attracts tourists and trekkers from around the world who come to explore its natural beauty and engage in outdoor activities. - **Conservation:** The Himalayan region is ecologically significant, as it is home to diverse flora and fauna. Efforts are made to protect the unique biodiversity and fragile ecosystems in this region. National parks and wildlife sanctuaries, like Jim Corbett National Park and Great Himalayan National Park, are part of conservation initiatives. The Himalayan Region is not only a geographical marvel but also a cultural treasure trove, where indigenous tribes maintain their heritage in harmony with the awe-inspiring natural surroundings. It remains an area of great significance and interest for both its ecological importance and cultural diversity.";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="lg">
        <Header title="Blog" />
        <Grid
          container
          display="flex"
          flexDirection="row"
          alignItems="start"
          justifyContent="center"
          spacing={5}

        >
          <Grid item xs={12} md={8} xl={8} 
          height='80vh'
          overflow='scroll'
          >
            
            <main height={{xl:'50vh',md:'50vh', xs:'100vh'}}>
  
              <MainFeaturedPost post={mainFeaturedPost} />
              <Paper
                sx={{
                  position: "relative",
                  backgroundColor: "#700089",
                  color: "#fff",
                  mb: 4,
                }}
              >
                <Grid container >
                  <Grid item md={11}>
                    <Box
                      sx={{
                        position: "relative",
                        p: { xs: 3, md: 6, xl:6 },
                        pr: { md: 0 },
              
                      }}
                    >
                      <Typography
                        component="h1"
                        variant="h3"
                        color="inherit"
                        gutterBottom
                      >
                        Introduction
                      </Typography>
                      <Typography variant="h6" color="inherit" paragraph textAlign='justify'>
                        {/* blog text */}
                        {blogText}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
              <Grid container spacing={2} xs={2}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid>
            </main>
            <Footer title="Inspiration India" description="Love India ❤️" sx={{xs:{display:'none'}}}/>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <Paper
              sx={{
                position: "relative",
                backgroundColor: "#094141",
                color: "#fff",
                mb: 4,
                mt: 0,
                ml:1,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                width:{xs:'90vw',xl:'30vw', md:'30vw'},
                border:'5px solid blue'
              }}
            >
              <Grid container>
                <Grid item md={12}>
                  <Box
                    sx={{
                      position: "relative",
                      p: { xs: 3, md: 6 },
                      height: "70vh",
                      // width: "100vw"
                      display:'flex',
                      flexDirection:'column',
                      justifyContent:'end',
                      alignItems:'start'
                    }}
                  >
                    
                    <Message/>
                      <Typography>Wonderful</Typography>
                    <Message/>
                      <Typography>boring😒</Typography>
                    <Message/>
                      <Typography>Nice</Typography>
                    <Message/>
                      <Typography>👍</Typography>
                    <Message/>
                      <Typography>Kdkkkk</Typography>
                    <Message/>
                      <Typography>Love you🤍</Typography>
                    <Message/>
                      <Typography>😍😍😍</Typography>
                    
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
