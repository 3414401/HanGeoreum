# 한걸음 · HanGeoreum

어디로 갈지, 무엇을 챙길지. 한걸음씩 안내해요.

한걸음 앱의 반응형 소개 사이트입니다. 소개 영상과 Android 데모 APK 다운로드 영역을 제공합니다. 빌드나 패키지 설치 없이 동작하는 HTML/CSS/JavaScript 정적 사이트입니다.

## 영상과 APK 연결

`site-config.js`에서 다음 값을 수정합니다.

```js
window.HANGEOREUM_CONFIG = {
  videoUrl: './assets/intro.mp4',
  apkUrl: 'https://github.com/3414401/HanGeoreum/releases/download/v0.1.0/hangeoreum-demo.apk',
  version: 'v0.1.0',
};
```

- `videoUrl`: 업로드한 MP4/WebM 파일의 상대 경로 또는 YouTube 영상 주소를 입력합니다. YouTube는 개인정보 보호 강화 임베드를 사용합니다.
- `apkUrl`: 실제 APK 파일의 URL을 입력합니다. 큰 APK는 GitHub Releases에 올린 후 파일의 직접 다운로드 주소를 붙여 넣는 방식을 권장합니다. 저장소에 작은 파일을 직접 올린 경우 `./downloads/hangeoreum-demo.apk` 같은 상대 경로도 사용할 수 있습니다.
- `version`: 실제 공개한 데모의 버전입니다. 미입력 시 버전 표기를 생략합니다.
- 파일이 없는 상태에서는 URL을 비워 두세요. 영상과 다운로드 영역이 준비 중 상태로 표시되며 존재하지 않는 파일을 다운로드하지 않습니다.

## GitHub Pages 공개

1. 저장소 **Settings → Pages**로 이동합니다.
2. **Build and deployment → Source → Deploy from a branch**를 선택합니다.
3. **main** 브랜치와 **/(root)**를 선택하고 **Save**합니다.
4. 배포가 끝나면 `https://3414401.github.io/HanGeoreum/`에서 확인할 수 있습니다.

이 주소는 Pages 설정과 배포 완료 후에 활성화됩니다.

## 로컬 확인

```sh
python3 -m http.server 8080
```

브라우저에서 `http://localhost:8080`을 엽니다.

## 구성

- `index.html`: 소개 페이지, 서비스 화면 예시, 영상 및 다운로드 카드
- `style.css`: 모바일·태블릿·PC 반응형 디자인
- `app.js`: 영상 연결, 다운로드 활성화, 준비 중 상태 처리
- `site-config.js`: 영상·APK URL 및 버전 설정
- `favicon.svg`: 브라우저 탭 아이콘

앱 화면은 서비스 이해를 위한 HTML/SVG 예시이며 실제 앱의 스크린샷이 아닙니다. 현재 앱은 일부 기능을 구현한 데모 단계로 표시합니다. 외부 분석 도구나 개인정보 수집 기능은 포함하지 않습니다.
