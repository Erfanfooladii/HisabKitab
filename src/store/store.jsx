import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const specificationsList = (set) => ({
    data: [],
    addData: (item) => {
        set((state) => ({
            data: [...state.data, item]
        }));
    },
    upData: (item) => {
        set((state) => ({
            data: state.data.map(post => post.id === item.id ? item : post)
        }));
    }
});

const useSpecificationsLs = create(devtools(
    persist(specificationsList, {
        name: "specifications",
    })
));
export default useSpecificationsLs;