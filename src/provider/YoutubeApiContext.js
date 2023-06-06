import { createContext, useContext } from "react";
import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext();

const youtube = new Youtube();

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {/* value 값을 전달할 때 중괄호를 두 번 사용하는 이유는? : 
        value 프로퍼티에 객체 { youtube: youtube } 를 전달하고자 이렇게 전달한 것이라 생각.
        그래야 나중에 { youtube } = useContext()를 사용하여
        객체  디컨스트럭쳐링으로 youtube 객체를 사용하고자 하는게 아닌가 싶음.
        */}
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
