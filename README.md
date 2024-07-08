# PithaMitha E-commerce Store

## Description
PithaMitha is a multivendor e-commerce platform for buying and selling traditional PithaMitha delicacies. The platform is built with Next.js for the frontend and Strapi CMS for the backend, ensuring a scalable and performant application.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contact](#contact)

## Features
- User registration and authentication
- Vendor dashboard for managing products and orders
- Customer dashboard for tracking purchases
- Product search and filtering
- Infinite scrolling and lazy loading
- Provide sales-dashboard for seller

## Technologies Used
- **Backend:** Strapi CMS, Node.js
- **Database:** PostgreSQL (Render)
- **Authentication:** JWT
- **Hosting:** Render

## Installation

### Prerequisites
- Node.js
- npm or yarn


### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/sojib258/pithaMithaBackend.git
   cd pithaMithaBackend

   
2. **Install dependencies:**
   ```bash
   npm install or yarn install (preferred yarn)


## Environment Variables
To run this project, you will need to add the following environment variables to your .env files:

1. **Set up environment variables:**
   - Create a .env file in your root directory.
   - Add the necessary environment variables as specified in the .env.example files provided.

2. **Add this necessary info in your .env file:**
   ```bash
    HOST=0.0.0.0
    PORT=1337
    APP_KEYS=(replace with your data)
    API_TOKEN_SALT=(replace with your data)
    ADMIN_JWT_SECRET=(replace with your data)
    TRANSFER_TOKEN_SALT=(replace with your data)
   
    # for database
    DATABASE_CLIENT=(replace with your data)
    DATABASE_HOST=(replace with your data)
    DATABASE_PORT=(replace with your data)
    DATABASE_NAME=(replace with your data)
    DATABASE_USERNAME=(replace with your data)
    DATABASE_PASSWORD=(replace with your data)
    DATABASE_SSL=(replace with your data)
    JWT_SECRET=(replace with your data)

    #for coludinary
    CLOUDINARY_NAME=(replace with your cloudinary name)
    CLOUDINARY_KEY=(replace with your cloudinary key)
    CLOUDINARY_SECRET=(replace with your cloudinary secret)



## Usage

1. **Run the following command:**
   ```bash
   cd pithaMithaBackend
   npm run develop or
   yarn develop

## Contact
If you have any questions or want to get in touch, feel free to reach out:
 - Email: sojibsrd85@gmail.com

