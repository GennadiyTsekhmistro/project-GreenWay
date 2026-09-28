// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Кеш регіонів і типів (рішення ментора): перший раз тягнемо з бекенду, далі — зі стору.
import { create } from 'zustand';

import type { Categories } from '@/types/category';

type CategoriesStore = {
  categories: Categories | null;
  setCategories: (categories: Categories) => void;
  // TODO: fetchCategories() — якщо categories === null, викликати getCategories()
};

export const useCategoriesStore = create<CategoriesStore>()((set) => ({
  categories: null,
  setCategories: (categories) => set({ categories }),
}));
