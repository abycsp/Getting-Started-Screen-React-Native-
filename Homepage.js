import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';

// Background image component
const BackgroundImage = () => {
 return (
   <Image
     source={{ uri: 'https://images.unsplash.com/photo-1557683325-3ba8f0df79de?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbG9yJTIwZ3JhZGllbnR8ZW58MHx8MHx8fDA%3D' }}
     style={styles.backgroundImage}
   />
 );
};


// Homepage component
export function Homepage() {
  const [headingText, setHeadingText] = useState('');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
 
  const heading = 'Zero Two';
  const carouselImages = [
    'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/09/darling-in-the-franxx-featured.jpg',
    'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/zero-two-feature.jpg',
    'https://videogamesmakemehappy.files.wordpress.com/2021/11/which-darling-in-the-franxx-character-are-you.jpg?w=1280',
  ];
 
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setHeadingText(heading.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > heading.length) clearInterval(interval);
    }, 100); 
    return () => clearInterval(interval);
  }, []);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);
 
  return (
    <ScrollView contentContainerStyle={[styles.content, { marginTop: 30 }]}>
      <View style={styles.searchBarContainer}>
        <MaterialIcons name="search" size={24} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <View style={styles.carouselContainer}>
        <Image
          source={{ uri: carouselImages[carouselIndex] }}
          style={styles.carouselImage}
        />
      </View>
      <Text style={styles.heading}>{headingText}</Text>
      <Text style={styles.description}>
        "Welcome to Zero FunKo Puff, where pop culture meets puffiness! Step into a world of whimsical collectibles and delightful surprises.
      </Text>
      <View style={styles.divider}></View>
      <Text style={styles.subheading}>Featured Funkos</Text>
      <View style={styles.game}>
        <Image
          source={{ uri: 'https://animemangastore.com/wp-content/uploads/2022/03/Zero-Two-figure-300x300.jpg' }}
          style={styles.gameImage}
        />
        <Text style={styles.gameTitle}>Captain 02</Text>
        <Text style={styles.gameDescription}>
          A heroic Funko with a commanding presence, ready to lead any adventure.
        </Text>
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividers}></View>
      <View style={styles.game}>
        <Image
          source={{ uri: 'https://animemangastore.com/wp-content/uploads/2022/03/Zero-Two-figurine.jpg' }}
          style={styles.gameImage}
        />
        <Text style={styles.gameTitle}>Happy 02</Text>
        <Text style={styles.gameDescription}>
          A cheerful Funko spreading joy with its infectious smile, brightening any room it enters.
        </Text>
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
 }
 
 


// About component
export function About() {
 return (
   <ScrollView contentContainerStyle={[styles.content, { marginTop: 90 }]}>
   <View style={styles.content}>
     <View style={styles.profileContainer}>
       <Image
         source={{ uri: 'https://i.scdn.co/image/ab67616100005174cd03117c98c22c166991667e' }} // Add your profile image URI
         style={styles.profileImage}
       />
       <Text style={styles.profileName}>Denise Julia</Text>
       <Text style={styles.profileBio}>Connect with me!</Text>
       <View style={styles.socialIcons}>
         <TouchableOpacity onPress={() => openLink('')}>
           <Ionicons name="logo-instagram" size={24} color="#333" style={styles.icon} />
         </TouchableOpacity>
         <TouchableOpacity onPress={() => openLink('')}>
           <Ionicons name="logo-twitter" size={24} color="#333" style={styles.icon} />
         </TouchableOpacity>
         <TouchableOpacity onPress={() => openLink('')}>
           <Ionicons name="logo-facebook" size={24} color="#333" style={styles.icon} />
         </TouchableOpacity>
       </View>
     </View>
     <Text style={styles.heading}>About Me</Text>
      <View style={styles.divider}></View>
     <Text style={styles.description}>
     Hey there, fellow collectors! I'm a huge fan of Zero Two from Darling in the Franxx, and my love for this character knows no bounds. My Funko Pop collection is filled with adorable Zero Two figures, each one a cherished addition to my growing lineup of merchandise. From her iconic red horns to her captivating smile, I can't get enough of Zero Two's charm and charisma.
     </Text>
     <Text style={styles.description}>
     Join me on this journey as we explore the world of collectibles together, one Funko at a time!"
     </Text>
     <Text style={styles.description}>
      please add me thanks
     </Text>
   </View>
 </ScrollView>
 );
}


// Games component
export function Services() {
 // Define an array of game objects with details such as title, description, image URI, and price
 const games = [
   {
     title: 'Our physical store',
     description: 'Punk Puff Store 123 Funko Street, Barangay Collectible Metro Manila, Philippines',
     imageUri: 'https://staticmapmaker.com/img/mapbox.png',
     price: 29.99,
   },
   
   // Add more games as needed
 ];


 const addToWishlist = (gameTitle) => {
   // Implement your logic to add the game to the wishlist
   console.log(`${gameTitle} added to wishlist`);
 };


 return (
   <ScrollView contentContainerStyle={[styles.content, { marginTop: 60 }]}>
     <Text style={styles.heading}>Maps</Text>
     <View style={styles.divider}></View>
     {games.map((game, index) => (
       <View key={index} style={styles.game}>
         <Image source={{ uri: game.imageUri }} style={styles.gameImage} />
         <Text style={styles.gameTitle}>{game.title}</Text>
         <Text style={styles.gameDescription}>{game.description}</Text>
   
         <View style={styles.buttonContainer}>
           
         </View>
         <View style={styles.dividers}></View>
       </View>
     ))}
   </ScrollView>
 );
}


// Wishlist component
export function Wishlist() {
 return (
   <View style={styles.content}>
     <Text style={styles.heading}>About Us</Text>
     
     <View style={styles.game}>
       <Image
         source={{ uri: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-FunkoUS-Library/default/dw9a7dc862/images/funko/content-asset/about-us/locations/location-headquarters.jpg?sfrm=jpg' }}
         style={styles.gameImage}
       />
       
       <Text style={styles.gameDescription}>
       Welcome to Punk Puff, your ultimate destination for all things funky and fabulous in the world of collectibles! Established in the heart of Manila, our store is a haven for pop culture enthusiasts, collectors, and fans alike. At Punk Puff, we're passionate about bringing joy and excitement to our customers through our diverse range of Funko Pop figures, plush toys, apparel, and accessories. With a curated selection of the latest releases, rare finds, and exclusive merchandise, we strive to cater to every fandom and collector's needs.
       </Text>
 
     </View>
   </View>
 );
}




// Contact component
export function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [messageSent, setMessageSent] = useState(false); // State to track if message is sent

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleMessageChange = (text) => {
    setMessage(text);
  };

  const handlePhoneChange = (text) => {
    setPhone(text);
  };

  const handleSendMessage = () => {
    // Implement sending message logic here
    // For demonstration purposes, just show an alert
    Alert.alert(
      'Message Sent',
      'Your message has been sent successfully!',
      [
        {
          text: 'OK',
          onPress: () => {
            setEmail(''); // Clear email input
            setMessage(''); // Clear message input
            setPhone(''); // Clear phone input
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.content}>
      <Text style={styles.heading}>Contact Us</Text>
      {/* Profile icon */}
      <View style={styles.profileContainer}>
        <Ionicons name="person" size={48} color="white" />
      </View>
      {/* Display input fields if message is not sent */}
      {!messageSent && (
        <>
          {/* Email input field */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
             style={[styles.input, {  width: 300 }]}
              placeholder="Enter your email"
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
          {/* Phone input field */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={[styles.input, { width: 300 }]}
              placeholder="Enter your phone number"
              value={phone}
              onChangeText={handlePhoneChange}
            />
          </View>
          {/* Message input field */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.input, { height: 100, width: 300 }]}
              placeholder="Enter your message"
              value={message}
              onChangeText={handleMessageChange}
              multiline={true}
              textAlignVertical="top"
            />
          </View>
          {/* Send Message button */}
          <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </>
      )}
      {/* Show a message if message is sent */}
      {messageSent && (
        <Text style={styles.messageSentText}>Your message has been sent. Thank you!</Text>
      )}
    </View>
  );
}





// Main App component
export default function App() {
 const [currentPage, setCurrentPage] = useState('home');


 const renderPage = () => {
   switch (currentPage) {
     case 'home':
       return <Homepage />;
     case 'about':
       return <About />;
     case 'games':
       return <Services />;
     case 'wishlist':
       return <Wishlist />;
     case 'contact':
       return <Contact />;
     default:
       return <Homepage />;
   }
 };


 return (
   <View style={styles.container}>
     <BackgroundImage />
     <View style={styles.pageContainer}>
       {renderPage()}
     </View>
     <View style={styles.bottomNav}>
       <TouchableOpacity onPress={() => setCurrentPage('home')} style={styles.navItem}>
         <MaterialIcons name="home" size={24} color="white" />
         <Text style={styles.navText}>Home</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => setCurrentPage('about')} style={styles.navItem}>
         <MaterialIcons name="person" size={24} color="white" />
         <Text style={styles.navText}>Profile</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => setCurrentPage('games')} style={styles.navItem}>
         <MaterialIcons name="map" size={24} color="white" />
         <Text style={styles.navText}>Maps</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => setCurrentPage('wishlist')} style={styles.navItem}>
         <MaterialIcons name="info" size={24} color="white" />
         <Text style={styles.navText}>About</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => setCurrentPage('contact')} style={styles.navItem}>
         <Ionicons name="mail" size={24} color="white" />
         <Text style={styles.navText}>Contact</Text>
       </TouchableOpacity>
     </View>
   </View>
 );
}


// Styles
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 pageContainer: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
 },
 content: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 20,
},
carouselContainer: {
  width: '100%',
  height: 200,
  marginBottom: 10, // Reduce the margin to bring carousel closer to search bar
  marginTop: 2, // Adjust the marginTop to position carousel closer to search bar
},
searchBarContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
  borderRadius: 25,
  paddingHorizontal: 15,
  marginTop: 35, // Adjust this value to lower the search bar
  marginBottom: 0,
},
searchIcon: {
  marginRight: 10,
},
searchInput: {
  flex: 1,
  paddingVertical: 10,
  fontSize: 16,
  color: 'black',
},
 backgroundImage: {
   flex: 1,
   resizeMode: 'cover',
   position: 'absolute',
   width: '100%',
   height: '100%',
 },
 heading: {
   fontSize: 24,
   fontWeight: 'bold',
   marginBottom: 10,
   textAlign: 'left',
   marginTop: 30,
   color: 'white',
 },
 description: {
   fontSize: 16,
   marginBottom: 20,
   textAlign: 'center',
   color: 'white',
 },
 subheading: {
   fontSize: 23,
   fontWeight: 'bold',
   marginBottom: 30,
   textAlign: 'center',
   color: '#FFFFFF',
 },
 game: {
   marginBottom: 20,
   alignItems: 'center',
 },
 gameImage: {
   width: 300,
   height: 300,
   marginBottom: 10,
 },
 gameTitle: {
   fontSize: 18,
   fontWeight: 'bold',
   marginBottom: 5,
   textAlign: 'center',
   color: 'white',
 },
 gameDescription: {
   fontSize: 14,
   textAlign: 'center',
   color: 'white',
 },
 gamePrice: {
   fontSize: 14,
   textAlign: 'center',
   color: 'white',
   marginBottom: 5,
 },
 bottomNav: {
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
   width: '100%',
   backgroundColor: '#ffb6c1', // Light pink color
   paddingVertical: 10,
 },
 navItem: {
   alignItems: 'center',
 },
 navText: {
   color: 'white',
   marginTop: 5,
 },
 exploreButton: {
   backgroundColor: '#191970',
   padding: 10,
   borderRadius: 5,
   marginTop: 10,
 },
 buttonText: {
   color: 'white',
   fontWeight: 'bold',
   textAlign: 'center',
 },
 carouselContainer: {
   width: '100%',
   height: 200,
   marginBottom: 20,
   marginTop: 60,
 },
 carouselImage: {
   width: '100%',
   height: '100%',
   resizeMode: 'cover',
 },
 divider: {
   borderBottomColor: 'white',
   borderBottomWidth: 3,
   width: '90%',
   marginBottom: 40,
   marginTop:20,
 },
 dividers:{
   borderBottomColor: 'white',
   borderBottomWidth: 2,
   width: '80%',
   marginBottom: 50,
   marginTop:20,
 },
 profileContainer: {
   alignItems: 'center',
   marginBottom: 20,
 },
 profileImage: {
   width: 150,
   height: 150,
   borderRadius: 75,
   marginBottom: 10,
 },
 profileName: {
   fontSize: 24,
   fontWeight: 'bold',
   marginBottom: 5,
   color:'#dc143c'
 },
 profileBio: {
   fontSize: 16,
   marginBottom: 10,
   textAlign: 'center',
   color:'white'
 },
 socialIcons: {
   flexDirection: 'row',
   justifyContent: 'center',
   marginBottom: 20,
 },
 icon: {
   marginHorizontal: 10,
   color:'white',
 },
 buttonContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginTop: 10,
 },
 button: {
   flex: 1,
   padding: 10,
   borderRadius: 5,
   alignItems: 'center',
 },
 wishlistButton: {
   backgroundColor: '#006400', // Dark green color
   marginLeft: 5,
   width: 100,
 },
 
 
 
 
 profileContainer: {
  alignItems: 'center',
  marginBottom: 20,
},
inputContainer: {
  width: '100%', // Make input fields the same width
  marginBottom: 10,
},
label: {
  color: 'white',
  marginBottom: 5,
  marginLeft: 10,
},
input: {
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 15,
  color: 'black', // Change text color if needed
  width: '100%', // Make input fields the same width
},
button: {
  backgroundColor: '#191970', // Change button color as desired
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 10,
  width: '100%', // Make button the same width as input fields
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 16,
},
});