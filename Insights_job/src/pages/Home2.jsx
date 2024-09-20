import React from 'react'
import Nav2 from '../components/Nav2'
import Card from '../components/Card'
import dashboard from '../assets/dashboard.jpg'
import senti from "../assets/senti.svg"
import NBA from "../assets/NBA.png"
import CS from "../assets/CS.webp"
import Upload2 from '../pages/Upload2'
import { Link } from 'react-router-dom'

const Home2 = () => {
   
  
  return (
    <>   
    <Link to="/"></Link>
     <div>
        <Nav2></Nav2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mx-8 my-14">
        {/* Upselling and Cross-selling Product Card */}
        <Card
          imageSrc={dashboard}
          title="Cutomer Churn Prediction"
          description="Derive valuable insights from within your Customers data to suggest better Customer acquisition."
          link="/upload"
        />

        {/* Customer Segmentation Product Card */}
        <Card
          imageSrc={CS}
          title="Customer Segmentation"
          description="Know your customer and align them with valuable insghts to bifercate your product offeirngs based on what works for you."
          link="/upload"

        />

        {/* Next-Best Action Product Card */}
        <Card
          imageSrc={NBA}
          title="Next-Best Action"
          description="When in doubt, look no further. As the name suggests, find the next best action for your customer related queries."
          link="/upload"

        />

        {/* Sentiment Analysis Product Card */}
        <Card
          imageSrc={senti}
          title="Sentiment Analysis"
          description="Analyze and execute the right course of action with detialed sentiment analysis performed in depth on your customer data."
          link="/upload"

        />
      </div>
    </div>
    </>

  )
}

export default Home2