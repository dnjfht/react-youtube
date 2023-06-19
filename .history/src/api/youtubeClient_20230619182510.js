import axios from "axios";

export default class YoutubeClient {
  constructor() {
    // axios 통신을 할 때 필요한 기본 세팅을 여기 해서 httpClient에 할당해 준다.
    // .create() => custom config(사용자 지정 구성)를 사용하는 axios의 새 인스턴스를 생성할 수 있다.
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      // "url" 속성 값이 절대 URL이 아니라면 "url" 앞에 "baseURL"이 붙는다.
      // axios 인스턴스가 상대 URL을 해당 인스턴스의 메서드에 전달하도록
      // "baseURL"을 설정하는 것이 편리할 수 있다.

      // `params`는 요청과 함께 전송 될 URL 매개 변수.
      // 일반 객체 이거나 URLSearchParams 객체여야 함.
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
      // 외부 파일(.env)에 환경변수를 정의하여 변수로 받아오는 이유는 보안과 유지보수에 용이하기 때문.
      // 웹,앱 개발을 하다보면 포트, DB관련 정보, API_KEY등.. 개발자 혼자서 또는 팀만 알아야 하는 값 즉, git, 오픈소스에 올리면 안되는 값들이 있다.
      // 이때 필요한 것이 dotenv 패키지 이며 환경변수 파일을 외부에 만들어 URL,포트, API_KEY등.. 을 저장시켜 소스코드 내에 하드코딩하지 않고 사용할수 있다.
      // 환경 변수를 컴퓨터 상에 저장해두는 것이다. => 커밋하는 곳에 저장 X
      // 배포할 때 변수를 설정해주면 된다. => 서버 상에서 환경 변수를 설정해준다.
    });
  }

  async search(params) {
    return this.httpClient.get("search", params);
  }

  async videos(params) {
    return this.httpClient.get("videos", params);
  }

  async channels(params) {
    return this.httpClient.get("channels", params);
  }
}
