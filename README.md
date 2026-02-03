# Text Focus Analyzer

A lightweight web application that helps users quickly identify **frequently emphasized words** in large blocks of text such as **job descriptions** or **company website content**.

The goal is to reduce information overload and highlight what truly matters in the text.

---

## 🎯 Problem Statement

When reviewing job descriptions or company pages, it is difficult to immediately understand:
- Which skills are emphasized?
- What technologies or concepts appear repeatedly?
- What the content is really focusing on?

Manually scanning long text is inefficient and error-prone.

---

## 💡 Solution

**Text Focus Analyzer** allows users to:
1. Paste large amounts of text
2. Analyze the content on the server
3. View a ranked list of frequently used, meaningful words

This helps users quickly focus on **key skills, technologies, and priorities**.

---

## 🧠 How It Works

1. User pastes text into the UI
2. Backend validates the input
3. Text is normalized (lowercase, punctuation removed, whitespace cleaned)
4. Common and context-specific stop words are excluded
5. Remaining words are counted and ranked by frequency
6. Results are displayed in a simple table

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MVC Architecture
- JavaScript

### Frontend
- EJS (Server-Side Rendering)
- HTML5
- CSS3 (No frontend framework)

---

## 📁 Project Structure

