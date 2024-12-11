"use client";
import styles from "./FAQ.module.css";
import Link from "next/link";

const faqData = [
  {
    question: "What is the Cherry Blossom Festival?",
    answer: "The Cherry Blossom Festival is an annual event celebrating the blooming of cherry blossom trees, featuring cultural performances, food stalls, and family-friendly activities.",
  },
  {
    question: "When do cherry blossoms typically bloom?",
    answer: "Cherry blossoms usually bloom in early spring, around late March to early April, depending on the location and climate.",
  },
  {
    question: "Where can I see cherry blossoms in Washington, DC?",
    answer: "The National Mall is famous for its cherry blossoms, particularly around the Tidal Basin.",
  },
  {
    question: "Are there any cherry blossom festivals in Japan?",
    answer: "Yes, Japan has numerous cherry blossom festivals, with the most famous being Hanami, where people gather to enjoy the blossoms.",
  },
  {
    question: "Can I plant cherry blossom trees in my garden?",
    answer: "Yes, cherry blossom trees can be planted in gardens, but they require specific conditions such as well-drained soil and full sunlight.",
  },
  {
    question: "What is Hanami?",
    answer: "Hanami is the traditional Japanese practice of enjoying the transient beauty of cherry blossoms, often involving picnics under the blooming trees.",
  },
  {
    question: "What types of cherry blossom trees are there?",
    answer: "There are several types of cherry blossom trees, including Yoshino, Kwanzan, and Weeping cherry trees, each with unique characteristics.",
  },
  {
    question: "How long do cherry blossoms last?",
    answer: "Cherry blossoms typically last for about one to two weeks, depending on the weather conditions.",
  },
  {
    question: "Are cherry blossoms edible?",
    answer: "Yes, some cherry blossoms are edible and are used in Japanese cuisine, such as sakura mochi.",
  },
  {
    question: "What should I wear to a cherry blossom festival?",
    answer: "Dress comfortably for spring weather, and consider wearing layers as temperatures can vary throughout the day.",
  },
  {
    question: "How can I take the best photos of cherry blossoms?",
    answer: "To capture the best photos, visit during the golden hour (early morning or late afternoon) and use a shallow depth of field to focus on the blossoms.",
  },
  {
    question: "Are there any virtual cherry blossom events?",
    answer: "Yes, many organizations offer virtual tours and live streams of cherry blossom events for those who cannot attend in person.",
  },
  {
    question: "Can I bring food to a cherry blossom festival?",
    answer: "Yes, most cherry blossom festivals allow visitors to bring picnic food, but check the specific event guidelines.",
  },
  {
    question: "What is the significance of cherry blossoms in Japanese culture?",
    answer: "Cherry blossoms symbolize the transient nature of life and beauty in Japanese culture, representing the fleeting moments of beauty.",
  },
  {
    question: "Where else can I see cherry blossoms outside of Japan?",
    answer: "Cherry blossoms can be seen in various locations worldwide, including Washington, DC, Vancouver, and Bonn, Germany.",
  },
];

export default function FAQPage() {
  return (
    <div className={styles.faqPage}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.question}>
              {item.question}
            </div>
            <div className={styles.answer}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.contactMessage}>
        <p>Cant find the answer youre looking for?</p>
        <Link href="/contact">
          <button className={styles.contactButton}>Contact Us</button>
        </Link>
      </div>
    </div>
  );
}