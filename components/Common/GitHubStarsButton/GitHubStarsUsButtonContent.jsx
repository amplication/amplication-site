import { useEffect, useState } from 'react';

const GitHubStarsUsButtonContent = () => {
  const [starsCount, setStarsCount] = useState(12700);

  useEffect(() => {
    fetch('https://api.github.com/repos/amplication/amplication', {
      'Content-Type': 'application/json',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.stargazers_count) {
          setStarsCount(data.stargazers_count);
        }
      });
  }, []);

  const starsCountK = parseFloat((starsCount / 1000).toFixed(1));

  return (
    <>
      <div className="flex flex-row items-center">
        <span className="mr-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 26 24"
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 0C6.10898 0 0.52002 5.50883 0.52002 12.3034C0.52002 17.7394 4.09554 22.3511 9.0553 23.9782C9.67826 24.092 9.88002 23.7106 9.88002 23.3866V21.0962C6.4085 21.8405 5.6857 19.6444 5.6857 19.6444C5.11786 18.2223 4.29938 17.844 4.29938 17.844C3.16682 17.0801 4.3857 17.0965 4.3857 17.0965C5.6389 17.1827 6.29826 18.3648 6.29826 18.3648C7.41106 20.2452 9.21754 19.7018 9.92994 19.387C10.0412 18.5924 10.3647 18.049 10.7224 17.7425C7.95082 17.4298 5.03674 16.3748 5.03674 11.6615C5.03674 10.3174 5.5245 9.22035 6.32218 8.35911C6.19322 8.04845 5.76578 6.79658 6.44386 5.10282C6.44386 5.10282 7.49218 4.77268 9.8769 6.36391C10.8722 6.09119 11.9392 5.95483 13 5.9497C14.0608 5.95483 15.1289 6.09119 16.1263 6.36391C18.5089 4.77268 19.5551 5.10282 19.5551 5.10282C20.2343 6.79761 19.8068 8.04948 19.6779 8.35911C20.4787 9.22035 20.9623 10.3184 20.9623 11.6615C20.9623 16.3871 18.043 17.4277 15.2641 17.7322C15.7113 18.1136 16.12 18.8621 16.12 20.0104V23.3866C16.12 23.7137 16.3197 24.0982 16.9531 23.9772C21.9087 22.348 25.48 17.7374 25.48 12.3034C25.48 5.50883 19.8921 0 13 0Z" />
          </svg>
        </span>
        Star Us {starsCountK}K
      </div>
    </>
  );
};

GitHubStarsUsButtonContent.propTypes = {};

GitHubStarsUsButtonContent.defaultProps = {};

export default GitHubStarsUsButtonContent;
