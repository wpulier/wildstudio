export interface Project {
  name: string;
  slug: string;
  logo: string;
  description: string;
}

export const projects: Project[] = [
  { 
    name: "Spotify", 
    slug: "spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/232px-Spotify_icon.svg.png",
    description: "Redesigning the listening experience"
  },
  { 
    name: "Adobe", 
    slug: "adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/220px-Adobe_Corporate_Logo.png",
    description: "Reimagining creative tools"
  },
  { 
    name: "Tesla", 
    slug: "tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/220px-Tesla_Motors.svg.png",
    description: "Future of automotive interfaces"
  },
  { 
    name: "Airbnb", 
    slug: "airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/220px-Airbnb_Logo_B%C3%A9lo.svg.png",
    description: "Revolutionizing travel experiences"
  },
  { 
    name: "Apple", 
    slug: "apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/220px-Apple_logo_black.svg.png",
    description: "Designing next-gen devices"
  },
  { 
    name: "Slack", 
    slug: "slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/220px-Slack_icon_2019.svg.png",
    description: "Transforming workplace communication"
  },
  { 
    name: "Netflix", 
    slug: "netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png",
    description: "Reimagining streaming experiences"
  },
  { 
    name: "Google", 
    slug: "google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/220px-Google_2015_logo.svg.png",
    description: "Creating the search of tomorrow"
  },
  { 
    name: "Twitter", 
    slug: "twitter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png",
    description: "Redefining social conversations"
  }
]; 