"use client";

import { useState } from "react";

import AddReviewModal from "@/components/Modal/AddReviewModal/AddReviewModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <main>
      {isModalOpen && (
        <AddReviewModal onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
}