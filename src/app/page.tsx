"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="noise"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "Menu",          id: "#menu"},
        {
          name: "About",          id: "#about"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Nutty Chefs"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars"}}
      title="Fresh Irish Food Made With Love"
      description="Experience the warmth of homemade, fresh ingredients served with a smile. Nutty Chefs brings the best of Newcastle to your table."
      buttons={[
        {
          text: "Order Online",          href: "#menu"},
        {
          text: "Book a Table",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-eating-chicken-salad-with-boiled-vegetable_140725-180.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/chicken-bozbash-with-vegetables-table_140725-5635.jpg",          alt: "Diner 1"},
        {
          src: "http://img.b2bpic.net/free-photo/baked-salmon-with-vegetables_140725-912.jpg",          alt: "Diner 2"},
        {
          src: "http://img.b2bpic.net/free-photo/side-view-fried-fish-fillet-with-herbs-vegetables-sauce-plate_141793-2974.jpg",          alt: "Diner 3"},
        {
          src: "http://img.b2bpic.net/free-photo/homemade-chanterelle-stuffed-round-zucchini-plate_53876-101537.jpg",          alt: "Diner 4"},
        {
          src: "http://img.b2bpic.net/free-photo/overhead-view-two-people-toasting-glasses-juice-breakfast_23-2147942224.jpg",          alt: "Diner 5"},
      ]}
      avatarText="Loved by 500+ locals"
      marqueeItems={[
        {
          type: "text",          text: "Fresh Ingredients"},
        {
          type: "text",          text: "Locally Sourced"},
        {
          type: "text",          text: "Homemade Recipes"},
        {
          type: "text",          text: "Newcastle Finest"},
        {
          type: "text",          text: "Friendly Atmosphere"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="A Community Heart in Newcastle"
      buttons={[
        {
          text: "Learn More",          href: "#about"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="inline-image"
      useInvertedBackground={true}
      features={[
        {
          title: "Fresh Local Ingredients",          description: "Sourced daily for maximum quality.",          imageSrc: "http://img.b2bpic.net/free-photo/fresh-organic-vegetables-wooden-boards-background-top-view-healthy-food-concept_613910-6207.jpg?_wi=1"},
        {
          title: "Homemade With Heart",          description: "Every dish is cooked fresh just for you.",          imageSrc: "http://img.b2bpic.net/free-photo/male-chef-kitchen-preparing-salad_23-2149646230.jpg"},
        {
          title: "Fast Friendly Service",          description: "Always a smile to welcome you in.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-vegetables-mushrooms-tomatoes-bell-peppers-greens-rustic-board_140725-145782.jpg"},
      ]}
      title="Why You'll Love Nutty Chefs"
      description="We believe in the power of fresh ingredients and friendly service."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Creamy Chicken Soup",          price: "£5.95",          imageSrc: "http://img.b2bpic.net/free-photo/homemade-chicken-soup-white-bowl-with-carrots-celery_123827-37303.jpg"},
        {
          id: "2",          name: "Nutella Pancakes",          price: "£6.50",          imageSrc: "http://img.b2bpic.net/free-photo/dessert-white-plate_23-2147693915.jpg"},
        {
          id: "3",          name: "Artisan Salad Sandwich",          price: "£7.25",          imageSrc: "http://img.b2bpic.net/free-photo/plate-with-sandwiches-souces_23-2148454780.jpg"},
        {
          id: "4",          name: "Homemade Soup of Day",          price: "£5.50",          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-soup-chicken-broth-sprinkled-with-herbs_140725-2237.jpg"},
        {
          id: "5",          name: "Kids Meal Pancakes",          price: "£4.50",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-yummy-pancakes-with-fruits-tea-light_140725-121025.jpg"},
        {
          id: "6",          name: "Fresh Salad Baguette",          price: "£6.95",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-person-eating-doner-kebab-pita-bread-table_140725-12863.jpg"},
      ]}
      title="Our Daily Menu"
      description="Delicious homemade meals to fuel your day."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "dine-in",          name: "Dine In",          price: "Varies",          features: [
            "Cozy Atmosphere",            "Friendly Staff",            "Service included"],
          buttons: [
            {
              text: "Book Now",              href: "#contact"},
          ],
        },
        {
          id: "takeaway",          name: "Takeaway",          price: "Quick",          features: [
            "Fast Pickup",            "Freshly Cooked",            "Easy Ordering"],
          buttons: [
            {
              text: "Order Now",              href: "#menu"},
          ],
        },
        {
          id: "delivery",          name: "Delivery",          price: "+£2.00",          features: [
            "Straight to Door",            "Hot & Fresh",            "Easy App Order"],
          buttons: [
            {
              text: "Order Now",              href: "#menu"},
          ],
        },
      ]}
      title="Dining Options"
      description="Choose the best way to enjoy our food."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          role: "Diner",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-coffee-croissant_23-2147699865.jpg"},
        {
          id: "2",          name: "Michael C.",          role: "Diner",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-joyful-man-being-glad-hear-old-best-friend-mobile-phone_273609-8929.jpg"},
        {
          id: "3",          name: "Emily R.",          role: "Diner",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-thanksgiving-food-border-arrangement-with-copy-space_23-2149114441.jpg"},
        {
          id: "4",          name: "David K.",          role: "Diner",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-fork-knife-table-with-model-heart-plate_23-2148016816.jpg"},
        {
          id: "5",          name: "Jane D.",          role: "Diner",          company: "Local",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-delicious-cocktail_23-2150166180.jpg"},
      ]}
      kpiItems={[
        {
          value: "4.5",          label: "Star Rating"},
        {
          value: "69+",          label: "Reviews"},
        {
          value: "100%",          label: "Homemade"},
      ]}
      title="What Our Customers Say"
      description="Don't just take our word for it."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Visit Us"
      title="Get in Touch / Book Now"
      description="10 Donard St, Newcastle BT33 0AW | Phone: +44 28 4372 6236"
      imageSrc="http://img.b2bpic.net/free-photo/event-hall-furniture-brown-white-colors_114579-2230.jpg"
      mediaAnimation="slide-up"
      inputPlaceholder="Leave a message or reservation request"
      buttonText="Send Request"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      logoText="Nutty Chefs"
      imageSrc="http://img.b2bpic.net/free-photo/fresh-organic-vegetables-wooden-boards-background-top-view-healthy-food-concept_613910-6207.jpg?_wi=2"
      columns={[
        {
          title: "Pages",          items: [
            { label: "Home", href: "#home" },
            { label: "Menu", href: "#menu" },
          ],
        },
        {
          title: "Legal",          items: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}