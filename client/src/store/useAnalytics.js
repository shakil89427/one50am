import axios from "axios";
import { create } from "zustand";

const useAnalytics = create((set, get) => ({
  loading: false,
  selected: "Instagram",
  updateSelected: (selected) => set({ selected }),
  instagramData: false,
  youtubeData: false,
  twitterData: false,
  instagramUsername: "",
  youtubeUsername: "",
  twitterUsername: "",
  updateInstagramUsername: (instagramUsername) => set({ instagramUsername }),
  updateYoutubeUsername: (youtubeUsername) => set({ youtubeUsername }),
  updateTwitterUsername: (twitterUsername) => set({ twitterUsername }),
  instagramSearch: (e) => e.preventDefault(),
  youtubeSearch: async (e) => {
    try {
      e.preventDefault();
      set({ loading: true });
      const username = get().youtubeUsername;
      const { data } = await axios.post("https://one50am.azurewebsites.net/search/youtube", {
        username,
      });
      set({ loading: false, youtubeData: data });
    } catch (err) {
      set({ loading: false, youtubeData: "not_found" });
    }
  },
  twitterSearch: async (e) => {
    try {
      e.preventDefault();
      set({ loading: true });
      const username = get().twitterUsername;
      const { data } = await axios.post("https://one50am.azurewebsites.net/search/twitter", {
        username,
      });
      set({ loading: false, twitterData: data });
    } catch (err) {
      set({ loading: false, twitterData: "not_found" });
    }
  },
}));

export default useAnalytics;
