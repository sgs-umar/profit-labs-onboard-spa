import React from "react";

const EndSummaryMainContent = () => {
  return (
    <div className="w-[75%] float-right p-10 relative h-[650px] items-center">
      <div className="w-full h-52 mb-14 mt-5">
        <div className="w-52 h-full bg-no-repeat m-auto">
          <svg
            width="209"
            height="207"
            viewBox="0 0 209 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M104.784 46.6363C105.43 45.323 105.973 43.9616 106.408 42.5642C106.382 42.4545 100.579 34.9797 86.8764 29.3901C86.1754 30.0968 85.5159 30.8435 84.9013 31.6264C82.158 29.1509 77.5297 30.6948 75.9594 33.9944C75.3191 35.5574 75.2011 37.2855 75.6231 38.9211C76.0451 40.5566 76.9844 42.012 78.3011 43.0701C76.8636 47.648 77.0765 52.385 81.7027 55.6593C81.7027 55.6593 79.4664 59.5711 79.3336 59.9168C78.8541 61.2741 81.6489 62.8718 81.8091 62.8444C83.1852 61.2015 84.4734 59.487 85.6683 57.7079C90.0026 59.9607 94.1383 59.8806 98.2564 56.3506C99.7553 56.9274 101.42 56.9002 102.899 56.2747C104.378 55.6493 105.557 54.4744 106.188 52.9973C106.592 51.9146 106.675 50.738 106.426 49.6093C106.177 48.4806 105.607 47.4481 104.784 46.6363ZM78.7553 41.7391C77.836 40.9446 77.1643 39.9028 76.82 38.7376C76.4756 37.5724 76.4733 36.3328 76.8131 35.1663C77.0237 34.437 77.4048 33.7683 77.9249 33.2154C78.445 32.6625 79.0891 32.2412 79.8041 31.9864C80.5192 31.7316 81.2845 31.6506 82.0371 31.7499C82.7896 31.8493 83.5077 32.1263 84.1321 32.558C81.933 35.3612 80.1242 38.4497 78.7553 41.7391ZM99.1419 55.4991C101.141 53.2653 102.808 50.7557 104.093 48.0474C107.039 50.8619 104.345 56.2946 99.1419 55.4991Z"
              fill="#38A1FF"
            />
            <path
              d="M76.361 71.4943C76.7364 70.7611 77.0663 70.0055 77.3486 69.2317C76.6299 68.8059 74.7941 67.4486 74.7941 67.4486C74.2047 68.149 73.6875 68.907 73.2502 69.7112C71.6676 68.7514 70.0327 67.8806 68.353 67.103C68.1401 67.2632 64.0417 73.0909 64.1745 73.4672C64.2842 73.8403 76.71 80.4899 77.6416 80.8926C78.3603 79.961 81.6335 74.5854 81.6072 74.5283C81.6302 74.5316 79.1822 73.0909 76.361 71.4943Z"
              fill="#38A1FF"
            />
            <path
              d="M208.608 182.956C202.243 178.002 185.831 166.217 185.719 166.136C185.662 166.097 185.598 166.071 185.53 166.058C185.463 166.046 185.393 166.047 185.326 166.062C185.259 166.077 185.195 166.105 185.139 166.145C185.083 166.185 185.036 166.236 185.001 166.295C181.097 171.105 176.709 175.502 171.907 179.416C167.107 183.046 161.91 186.117 156.416 188.571C148.219 184.266 134.87 176.956 123.388 170.234C123.497 170.154 123.042 152.163 121.951 143.487C121.419 139.361 118.251 124.564 117.826 123.765C119.396 124.803 122.51 127.225 122.564 127.305C122.649 127.433 122.781 127.524 122.931 127.558C123.082 127.593 123.239 127.568 123.372 127.49C123.505 127.411 123.603 127.285 123.646 127.137C123.688 126.988 123.673 126.829 123.602 126.692C120.125 120.193 118.134 113.003 117.773 105.641C117.639 103.645 117.826 101.622 117.773 99.6256C120.075 100.935 122.158 102.596 123.947 104.549C128.207 109.383 128.415 113.475 129.377 116.765C129.41 116.877 129.483 116.973 129.581 117.036C129.679 117.099 129.797 117.125 129.912 117.109C130.028 117.093 130.134 117.036 130.212 116.949C130.289 116.861 130.333 116.749 130.335 116.633C130.335 113.596 128.477 108.137 124.958 104.044C122.741 101.66 120.141 99.6628 117.266 98.1355C116.472 97.7401 115.654 97.3935 114.818 97.0974C114.73 97.0771 114.638 97.0883 114.558 97.129C114.478 97.1698 114.415 97.2374 114.38 97.3201C114.345 97.4028 114.34 97.4952 114.366 97.5812C114.393 97.6671 114.448 97.7409 114.524 97.7898C115.292 98.2156 116.041 98.6413 116.786 99.0671C116.534 101.187 116.508 103.328 116.707 105.454C117.018 111.541 118.411 119.573 121.097 124.829C117.587 122.561 113.952 120.49 110.21 118.628C107.006 117.261 101.679 114.569 99.2725 116.845C98.8731 114.689 98.3672 112.587 98.1544 110.404C97.5594 103.795 98.6014 97.1406 101.188 91.0294C101.349 90.6036 100.656 90.3107 100.443 90.7101C96.2034 99.4753 95.8171 110.791 98.128 117.351C94.4072 118.384 90.9619 120.229 88.0406 122.754C86.9733 123.733 86.1127 124.915 85.5097 126.231C84.9066 127.548 84.5732 128.972 84.5293 130.419C83.8106 134.784 86.8446 143.966 88.6803 148.436C77.2191 140.507 77.0589 138.924 76.3907 139.867C66.4874 154.28 55.2025 167.694 42.6961 179.918C40.6212 178.746 30.6665 175.206 28.112 174.063C23.2686 171.88 18.5502 169.485 13.957 166.876C13.8266 166.804 13.673 166.786 13.5293 166.826C13.3857 166.865 13.2634 166.96 13.1889 167.089C9.72224 171.815 5.40397 175.852 0.455889 178.994C0.367938 179.049 0.304729 179.135 0.279612 179.236C0.254494 179.337 0.269434 179.443 0.321277 179.533C0.373119 179.622 0.457805 179.688 0.55745 179.717C0.657095 179.745 0.763898 179.734 0.855303 179.685C1.73738 179.222 2.59079 178.707 3.4109 178.141C6.3594 181.084 9.64686 183.666 13.2042 185.833C13.288 185.882 13.3833 185.908 13.4803 185.908C13.5773 185.908 13.6726 185.882 13.7564 185.834C13.8403 185.785 13.9098 185.715 13.9577 185.631C14.0057 185.546 14.0304 185.451 14.0294 185.354C14.0031 184.074 13.7696 182.807 13.3381 181.602C17.122 183 20.7603 184.764 24.2013 186.869C24.3258 186.939 24.4724 186.958 24.6109 186.924C24.7494 186.889 24.8694 186.803 24.9463 186.683C25.4785 185.778 26.037 184.899 26.5429 183.994C28.0067 184.74 29.4705 185.592 30.9869 186.204C31.4928 186.417 31.755 185.618 31.3337 185.379C29.8161 184.447 28.1658 183.733 26.5956 182.903C26.4783 182.84 26.3414 182.825 26.2128 182.859C26.0843 182.894 25.9739 182.976 25.9043 183.09C25.3447 183.941 24.807 184.819 24.2803 185.698C20.545 183.489 16.6059 181.644 12.5173 180.189C12.0378 180.002 11.7185 180.588 11.905 180.988C12.3935 182.039 12.7081 183.162 12.8366 184.315C9.75706 182.3 6.80586 180.095 4.00014 177.713C7.59926 174.88 10.8744 171.658 13.766 168.105C18.364 170.74 23.0982 173.129 27.9485 175.263C30.3176 176.301 40.1383 180.24 41.9214 180.692C41.3893 181.225 32.8732 189.369 28.9602 192.882C28.6409 193.174 29.2269 193.706 29.5462 193.414C38.8013 185.297 47.5962 176.67 55.89 167.572C59.217 169.888 62.4638 172.071 65.8435 174.306C65.9101 174.345 65.9846 174.368 66.0613 174.373C66.138 174.379 66.2151 174.368 66.2867 174.339C66.3583 174.311 66.4227 174.267 66.4749 174.211C66.5272 174.154 66.566 174.087 66.5886 174.013C66.8552 172.762 67.6003 170.686 68.8248 170.048C69.4898 169.702 70.5015 170.634 71.1127 171.006C71.8588 171.459 94.214 185.031 100.203 188.651C100.283 188.698 100.374 188.723 100.467 188.724C100.56 188.724 100.651 188.701 100.732 188.655C100.813 188.609 100.88 188.543 100.927 188.463C100.974 188.383 101 188.292 101.001 188.199C101.001 185.75 101.028 183.275 101.028 180.826C101.906 181.119 102.784 181.412 103.662 181.678C103.736 181.695 103.813 181.696 103.887 181.68C103.961 181.664 104.031 181.632 104.092 181.587C104.153 181.541 104.203 181.483 104.239 181.416C104.275 181.349 104.296 181.275 104.3 181.199C104.41 179.842 104.487 178.485 104.593 177.127L111.22 176.489C111.317 176.486 111.412 176.455 111.492 176.4C111.572 176.344 111.635 176.266 111.671 176.176C111.708 176.086 111.717 175.987 111.699 175.891C111.68 175.795 111.634 175.707 111.565 175.637C109.65 173.321 107.76 170.979 105.844 168.664C114.599 171.672 123.355 174.662 132.112 177.633C133.712 178.197 180.092 202.761 190.212 206.136C190.637 206.27 190.957 205.578 190.531 205.391C183.179 201.947 174.198 198.136 157.529 189.316C166.246 186.146 178.35 177.564 185.554 167.413C188.429 170.101 191.941 172.022 195.109 174.413L200.139 178.165C199.427 178.11 198.712 178.201 198.036 178.431C197.945 178.459 197.865 178.516 197.808 178.592C197.751 178.669 197.719 178.761 197.717 178.857C197.743 179.203 197.796 179.549 197.827 179.868C195.433 179.123 193.037 178.431 190.642 177.659C190.58 177.644 190.515 177.643 190.453 177.655C190.391 177.668 190.332 177.694 190.281 177.733C190.23 177.771 190.188 177.82 190.158 177.877C190.129 177.933 190.112 177.995 190.11 178.059C190.029 178.991 190 179.924 189.976 180.826C185.488 179.418 184.344 178.273 181.992 177.074C181.699 176.914 181.353 177.314 181.62 177.553C184.158 179.661 187.143 181.163 190.349 181.942C190.422 181.961 190.498 181.963 190.571 181.947C190.645 181.932 190.714 181.9 190.773 181.853C190.832 181.807 190.88 181.748 190.913 181.68C190.945 181.612 190.962 181.538 190.961 181.463C190.987 180.505 190.987 179.547 190.987 178.589C193.409 179.334 195.831 180.105 198.254 180.85C198.319 180.869 198.388 180.872 198.455 180.859C198.522 180.847 198.585 180.818 198.639 180.777C198.694 180.736 198.737 180.683 198.767 180.621C198.797 180.56 198.813 180.493 198.812 180.425C198.758 179.999 198.679 179.414 198.626 178.988C200.515 178.509 202.618 179.976 202.725 179.946C204.508 181.223 206.318 182.47 208.127 183.677C208.501 183.834 208.981 183.247 208.608 182.956ZM93.5798 134.224C97.1492 131.379 104.23 127.917 104.944 127.917C105.637 127.917 109.469 139.095 110.533 143.169C112.398 150.328 114.819 165.072 114.872 165.335C108.727 161.636 96.9857 153.997 96.5874 153.757C96.7092 153.384 92.1533 141.198 93.5798 134.224ZM104.443 166.961C103.91 166.777 103.618 167.466 103.937 167.839C106.039 170.393 108.169 172.949 110.272 175.503C108.249 175.716 106.2 175.903 104.177 176.116C104.053 176.124 103.936 176.177 103.847 176.265C103.759 176.353 103.706 176.471 103.698 176.595L103.379 180.427C102.473 180.135 101.569 179.842 100.69 179.523C100.614 179.504 100.534 179.503 100.457 179.519C100.38 179.536 100.308 179.57 100.247 179.619C100.185 179.668 100.135 179.73 100.101 179.801C100.068 179.872 100.051 179.95 100.052 180.029C100.025 182.396 100.025 184.792 99.9989 187.161L69.4141 168.638C69.3329 168.592 69.2412 168.568 69.148 168.568C69.0547 168.568 68.9631 168.592 68.8819 168.638C67.4183 169.713 66.3442 171.236 65.8216 172.975C62.6811 170.899 59.6471 168.877 56.4529 166.854C63.8162 158.566 70.6686 149.838 76.9722 140.718C81.2846 144.339 108.218 162.861 115.268 167.12C115.268 167.12 127.83 174.067 131.508 176.142C122.457 173.082 113.451 170.064 104.443 166.961Z"
              fill="#191919"
            />
            <path
              d="M137.068 67.6351C133.737 62.2288 139.701 52.9578 151.332 58.0273C151.758 58.2138 152.37 57.8945 152.184 57.3623C150.614 52.5979 154.738 48.2548 159.477 48.4468C164.453 48.6322 167.833 52.8645 168.711 57.4951C168.756 57.649 168.858 57.7797 168.997 57.8592C169.137 57.9387 169.301 57.9608 169.456 57.9208C172.787 56.8801 176.291 56.5067 179.766 56.8219C183.242 57.1371 186.621 58.1347 189.71 59.7577C191.307 60.6092 194.687 63.1593 191.76 64.7076C189.626 65.8356 163.697 65.8488 143.56 66.6509C143.429 66.6509 143.304 66.7029 143.211 66.7955C143.119 66.8881 143.066 67.0137 143.066 67.1447C143.066 67.2756 143.119 67.4012 143.211 67.4938C143.304 67.5864 143.429 67.6384 143.56 67.6384C155.937 67.4793 186.49 66.7343 189.337 66.494C190.935 66.3612 192.903 65.9618 193.756 64.4179C195.937 60.3458 188.512 57.7112 185.877 56.8597C180.643 55.1888 175.033 55.0964 169.747 56.5942C168.523 51.4303 164.291 47.0126 158.675 47.2782C153.885 47.5185 149.947 51.8561 150.798 56.5942C146.779 55.1304 141.91 54.8385 138.422 57.6849C135.468 60.1066 134.004 64.7646 136.346 68.0916C136.406 68.1874 136.502 68.2551 136.613 68.28C136.723 68.3049 136.839 68.2849 136.935 68.2244C137.031 68.1639 137.098 68.0678 137.123 67.9573C137.148 67.8468 137.128 67.7309 137.068 67.6351Z"
              fill="#191919"
            />
            <path
              d="M180.236 150.087C179.891 148.276 178.931 146.64 177.519 145.455C176.106 144.271 174.328 143.61 172.485 143.585C170.642 143.56 168.847 144.172 167.403 145.318C165.959 146.464 164.955 148.073 164.56 149.874C162.429 149.148 160.168 148.88 157.926 149.086C155.683 149.292 153.51 149.969 151.546 151.071C150.667 151.481 149.881 152.069 149.239 152.797C148.597 153.526 148.112 154.379 147.816 155.303C147.614 156.071 147.672 156.884 147.98 157.615C148.288 158.347 148.829 158.956 149.519 159.349C149.596 159.388 149.685 159.396 149.768 159.371C149.851 159.347 149.921 159.292 149.965 159.218C150.009 159.143 150.023 159.055 150.005 158.971C149.986 158.886 149.936 158.812 149.865 158.763C148.055 157.512 148.482 155.064 149.785 153.627C152.232 150.901 158.609 148.77 164.849 151.179C164.997 151.22 165.156 151.202 165.29 151.127C165.425 151.052 165.525 150.927 165.568 150.779C165.769 149.094 166.586 147.543 167.862 146.424C169.138 145.304 170.782 144.696 172.479 144.716C174.176 144.736 175.806 145.382 177.055 146.531C178.305 147.679 179.085 149.249 179.247 150.938C179.249 151.04 179.278 151.14 179.33 151.228C179.382 151.315 179.455 151.388 179.544 151.439C179.632 151.49 179.732 151.517 179.834 151.518C179.936 151.519 180.036 151.493 180.125 151.444C183.692 149.315 189.095 149.469 191.996 152.748C193.971 154.984 192.554 157.006 190.106 157.592C186.992 158.323 167.23 158.561 152.42 159.748C152.29 159.754 152.167 159.81 152.077 159.904C151.988 159.999 151.938 160.124 151.938 160.254C151.938 160.384 151.988 160.509 152.077 160.603C152.167 160.697 152.29 160.753 152.42 160.759C162.405 160.6 172.381 159.827 182.362 159.322C186.99 159.102 190.83 159.247 192.847 157.592C195.695 155.249 193.247 151.763 190.798 150.35C189.193 149.445 187.391 148.948 185.55 148.902C183.708 148.856 181.884 149.263 180.236 150.087Z"
              fill="#191919"
            />
            <path
              d="M12.1936 131.701C12.153 128.267 14.7481 125.526 17.8622 124.435C21.593 123.157 25.7397 124.116 29.4661 124.94C29.6106 124.976 29.7634 124.955 29.8925 124.88C30.0216 124.806 30.1169 124.685 30.1585 124.542C30.5854 122.854 31.5989 121.372 33.0178 120.363C34.4367 119.354 36.1684 118.882 37.9032 119.032C39.6174 119.303 41.1795 120.175 42.3106 121.491C43.4416 122.807 44.0679 124.483 44.0776 126.218C44.0783 126.309 44.0995 126.399 44.1396 126.481C44.1797 126.562 44.2377 126.634 44.3093 126.69C44.3809 126.746 44.4642 126.786 44.5531 126.805C44.642 126.825 44.7341 126.824 44.8227 126.803C46.8747 125.988 49.1063 125.73 51.2901 126.058C52.3808 126.218 58.5816 127.975 56.4265 129.811C55.7341 130.397 29.2532 131.381 17.2532 131.488C16.721 131.488 16.8801 132.393 17.386 132.393C21.751 132.339 51.1332 131.913 55.2854 131.355C56.4035 131.195 57.7334 130.795 58.0527 129.545C58.3995 128.214 57.255 127.15 56.217 126.538C54.5654 125.601 52.7363 125.02 50.847 124.832C48.9577 124.644 47.05 124.853 45.2462 125.446C45.0465 123.577 44.2329 121.826 42.9327 120.468C41.6325 119.111 39.919 118.222 38.0601 117.942C36.145 117.768 34.2278 118.25 32.6225 119.309C31.0173 120.368 29.8193 121.941 29.2247 123.769C25.179 122.918 20.6812 122.066 16.7682 123.823C13.6815 125.207 11.0996 128.161 11.3915 131.701C11.3915 131.807 11.4337 131.909 11.509 131.984C11.5842 132.059 11.6862 132.102 11.7926 132.102C11.8989 132.102 12.0009 132.059 12.0761 131.984C12.1514 131.909 12.1936 131.807 12.1936 131.701Z"
              fill="#191919"
            />
            <path
              d="M80.5384 68.8334C80.6471 68.8295 80.7511 68.7877 80.8321 68.7152C80.9132 68.6427 80.9663 68.5441 80.9822 68.4365C80.9982 68.3289 80.9759 68.2191 80.9192 68.1262C80.8626 68.0333 80.7752 67.9633 80.6723 67.9281C78.9419 67.2895 77.2389 67.2631 76.2008 65.5064C76.1436 65.4116 76.0544 65.3403 75.9493 65.3054C75.8443 65.2704 75.7301 65.2741 75.6275 65.3158C75.5249 65.3574 75.4405 65.4343 75.3895 65.5326C75.3386 65.6309 75.3243 65.7442 75.3493 65.852C76.0406 67.9018 78.4876 68.964 80.5384 68.8334Z"
              fill="#191919"
            />
            <path
              d="M82.1361 67.0503C82.2161 67.0228 82.2856 66.9711 82.3348 66.9022C82.384 66.8334 82.4104 66.7508 82.4104 66.6662C82.4104 66.5816 82.384 66.4991 82.3348 66.4303C82.2856 66.3614 82.2161 66.3096 82.1361 66.2822C80.1401 65.7719 78.3844 65.4241 77.0523 63.6684C76.733 63.2427 75.988 63.6421 76.3073 64.1216C77.5066 65.9058 79.8844 67.6494 82.1361 67.0503Z"
              fill="#191919"
            />
            <path
              d="M81.8431 65.1333C81.9456 65.1314 82.0446 65.0963 82.1255 65.0333C82.2063 64.9703 82.2646 64.8829 82.2915 64.784C82.3185 64.6851 82.3126 64.5802 82.2749 64.4849C82.2372 64.3896 82.1696 64.3091 82.0823 64.2555C80.7375 63.6992 79.5496 62.8217 78.6226 61.6999C78.2769 61.1951 77.4781 61.6472 77.7974 62.1794C78.1785 62.9653 78.7467 63.6456 79.4521 64.1606C80.1575 64.6756 80.9785 65.0096 81.8431 65.1333Z"
              fill="#191919"
            />
            <path
              d="M79.4477 69.923C79.3762 69.9246 79.3073 69.9495 79.2512 69.9939C79.1951 70.0382 79.155 70.0996 79.1369 70.1688C79.1188 70.2379 79.1237 70.3111 79.1509 70.3772C79.178 70.4433 79.226 70.4988 79.2875 70.5353C79.5927 70.7228 79.9416 70.8273 80.2997 70.8383C80.6577 70.8493 81.0124 70.7664 81.3285 70.5978C82.3948 70.0305 83.2133 69.0884 83.6262 67.9533C83.6542 67.8452 83.6463 67.731 83.6037 67.6278C83.5612 67.5245 83.4863 67.4379 83.3903 67.3808C83.2943 67.3238 83.1824 67.2995 83.0714 67.3115C82.9604 67.3235 82.8563 67.3712 82.7747 67.4475C81.8069 68.525 81.6039 69.7331 79.4477 69.923Z"
              fill="#191919"
            />
            <path
              d="M82.3226 71.3879C82.239 71.4807 82.1864 71.5972 82.172 71.7213C82.1577 71.8454 82.1823 71.9708 82.2425 72.0803C84.4514 77.1651 87.3526 82.5418 91.7966 86.0257C92.1697 86.3187 92.7019 85.8392 92.3563 85.4672C88.5364 81.5549 85.5008 76.9475 83.4133 71.8937C84.1791 71.0608 85.0066 70.2869 85.8888 69.5784C89.8391 74.5514 96.0037 80.6523 101.724 83.1519C101.843 83.2151 101.983 83.2297 102.113 83.1927C102.243 83.1558 102.354 83.0701 102.422 82.9535C102.491 82.8369 102.512 82.6984 102.481 82.5668C102.45 82.4351 102.369 82.3205 102.256 82.2467C98.0699 79.3663 91.9503 76.0887 86.4473 68.5404C86.3723 68.418 86.2522 68.3299 86.1129 68.295C85.9736 68.2601 85.8262 68.2813 85.7023 68.3539C84.4626 69.2316 83.3285 70.2497 82.3226 71.3879Z"
              fill="#191919"
            />
            <path
              d="M104.944 72.4797C104.528 73.7742 104.611 75.1778 105.177 76.4141C105.744 77.6504 106.752 78.63 108.005 79.16C107.822 80.0813 107.573 80.9883 107.26 81.8736C107.237 81.9679 107.248 82.0673 107.292 82.154C107.335 82.2407 107.408 82.3093 107.497 82.3477C107.586 82.386 107.686 82.3916 107.779 82.3635C107.872 82.3354 107.952 82.2753 108.005 82.194C108.513 81.3576 108.798 80.404 108.83 79.4255C109.482 79.5878 110.168 79.56 110.805 79.3454C110.898 79.3135 110.976 79.2505 111.028 79.1671C111.079 79.0837 111.101 78.9851 111.088 78.888C111.075 78.7908 111.029 78.7011 110.957 78.6341C110.886 78.5671 110.793 78.5269 110.695 78.5203C109.207 78.5515 107.762 78.0192 106.65 77.0301C106.088 76.3865 105.726 75.5933 105.608 74.7474C105.49 73.9016 105.621 73.0396 105.985 72.2668C106.014 72.1503 105.997 72.0269 105.938 71.9226C105.878 71.8182 105.781 71.741 105.665 71.7072C104.095 71.4416 107.129 67.2083 107.794 66.3052C109.2 67.3356 113.466 67.9983 112.691 69.8714C112.402 69.8714 112.303 70.4881 112.718 70.4563C116.113 70.2445 116.07 74.7489 112.745 74.3956C112.452 74.3692 112.318 74.9815 112.318 75.0342C112.291 75.1902 112.296 75.3501 112.333 75.5042C112.37 75.6582 112.438 75.803 112.533 75.93C112.627 76.057 112.747 76.1634 112.884 76.2427C113.021 76.3221 113.173 76.3727 113.33 76.3915C112.505 78.1472 113.037 82.6724 113.171 82.7262C111.735 83.6002 110.159 84.2212 108.513 84.562C108.39 84.5952 108.285 84.6751 108.221 84.7846C108.156 84.8941 108.137 85.0245 108.167 85.1479C108.593 86.4789 108.858 87.8626 109.155 89.22C109.235 89.5919 109.793 89.4855 109.793 89.1399C109.795 87.8682 109.606 86.6034 109.235 85.3871C110.678 85.0629 112.067 84.5341 113.361 83.8169C113.626 84.536 113.919 85.2547 114.238 85.9731C112.934 86.8772 111.657 87.889 110.326 88.7668C109.954 89.0334 110.166 89.7258 110.645 89.5349C112.291 88.7115 113.837 87.7024 115.253 86.5272C124.122 90.247 129.381 97.0952 131.384 106.621C131.932 109.938 132.217 113.293 132.235 116.654C132.209 116.682 131.703 116.735 131.516 116.788C131.444 116.809 131.378 116.847 131.326 116.901C131.273 116.954 131.236 117.021 131.217 117.094C131.198 117.166 131.198 117.242 131.218 117.315C131.238 117.387 131.277 117.453 131.33 117.506C131.5 117.611 131.693 117.674 131.892 117.687C132.092 117.701 132.291 117.667 132.474 117.586C134.284 117.134 133.114 109.548 132.422 106.302C130.038 95.0938 122.355 87.6475 115.304 85.702C114.088 83.6682 113.548 81.3016 113.76 78.9416C113.81 77.9792 113.998 77.029 114.32 76.1205C114.954 75.7502 115.513 75.2628 115.966 74.6841C119.512 70.837 119.197 65.389 114.369 63.506C112.856 63.1228 111.527 62.2178 110.616 60.9504C109.791 59.6469 110.431 56.9585 109.339 56.2935C108.724 56.2088 108.098 56.3076 107.54 56.5774C106.981 56.8472 106.514 57.276 106.199 57.81C105.471 59.0463 105.171 60.4875 105.344 61.9114C105.517 63.3353 106.154 64.6626 107.157 65.6885C106.169 66.8901 102.655 71.6545 104.944 72.4797Z"
              fill="#191919"
            />
            <path
              d="M107.499 76.5243C107.823 76.6135 108.164 76.6239 108.493 76.5547C108.821 76.4854 109.129 76.3384 109.39 76.126C109.668 75.9184 109.879 75.6337 109.997 75.3072C110.116 74.9808 110.135 74.6268 110.054 74.2891C110.025 74.1992 109.968 74.1209 109.892 74.0653C109.815 74.0098 109.723 73.9799 109.629 73.9799C109.534 73.9799 109.442 74.0098 109.366 74.0653C109.289 74.1209 109.232 74.1992 109.203 74.2891C109.105 74.6655 108.933 75.0185 108.697 75.3272C108.554 75.4687 108.381 75.5776 108.192 75.6465C108.003 75.7154 107.801 75.7427 107.6 75.7266C107.504 75.7312 107.413 75.7694 107.342 75.8346C107.272 75.8998 107.226 75.9878 107.214 76.0831C107.202 76.1783 107.224 76.2748 107.276 76.3555C107.328 76.4362 107.407 76.496 107.499 76.5243Z"
              fill="#191919"
            />
            <path
              d="M109.229 70.1633C109.368 70.4815 109.868 70.3762 109.948 70.0843C110.018 69.4943 109.877 68.8986 109.551 68.402C109.225 67.9054 108.734 67.5398 108.165 67.3696C107.713 67.2094 107.553 67.8217 107.872 68.0609C108.519 68.6154 108.99 69.3458 109.229 70.1633Z"
              fill="#191919"
            />
            <path
              d="M107.101 69.2855C106.924 69.7617 106.717 70.5298 107.21 70.6692C107.296 70.6914 107.386 70.6854 107.468 70.6519C107.549 70.6185 107.618 70.5595 107.663 70.4837C107.817 70.1295 107.907 69.751 107.93 69.3656C107.978 68.9409 107.287 68.7785 107.101 69.2855Z"
              fill="#191919"
            />
            <path
              d="M104.705 85.7064C104.362 84.6092 104.699 84.5696 106.009 83.2584C105.929 83.9497 105.956 85.4409 105.956 85.4936C105.327 85.5976 104.757 85.9285 104.355 86.4238C103.953 86.9191 103.746 87.5445 103.774 88.1819C103.854 88.6077 105.237 88.341 105.477 88.262C108.197 87.3546 108.188 85.3674 106.574 85.4409C106.577 84.4036 106.684 83.3692 106.893 82.3531C106.914 82.2689 106.907 82.18 106.873 82.1002C106.838 82.0204 106.779 81.9543 106.703 81.9119C106.627 81.8695 106.539 81.8534 106.453 81.8659C106.367 81.8784 106.288 81.9189 106.227 81.9811C104.38 83.6369 102.81 84.5049 104.098 86.0795C104.332 86.3187 104.785 86.0258 104.705 85.7064Z"
              fill="#191919"
            />
            <path
              d="M132.73 120.279C132.8 121.463 133.014 122.633 133.369 123.765C133.528 124.218 134.3 124.191 134.274 123.632C134.162 122.454 133.911 121.292 133.528 120.172C133.395 119.747 132.681 119.799 132.73 120.279Z"
              fill="#191919"
            />
            <path
              d="M131.293 125.096C131.373 125.548 132.011 125.495 132.144 125.096C132.4 124.292 132.426 123.468 132.299 120.627C132.295 120.529 132.254 120.437 132.185 120.368C132.115 120.3 132.022 120.26 131.925 120.258C131.828 120.255 131.733 120.289 131.659 120.353C131.586 120.418 131.54 120.508 131.531 120.605C131.154 124.263 131.148 124.37 131.293 125.096Z"
              fill="#191919"
            />
            <path
              d="M129.67 125.708C130.215 124.114 130.572 122.462 130.734 120.785C130.844 120.199 129.989 119.959 129.856 120.544C129.321 122.148 128.982 123.81 128.846 125.495C128.844 125.895 129.484 126.135 129.67 125.708Z"
              fill="#191919"
            />
            <path
              d="M129.189 117.165C128.626 117.367 128.231 117.964 127.805 118.389C127.326 118.841 126.767 119.214 126.315 119.693C126.022 120.012 126.315 120.624 126.767 120.461C127.436 120.185 128.042 119.777 128.55 119.263C129.029 118.811 129.669 118.275 129.748 117.586C129.747 117.518 129.732 117.451 129.701 117.391C129.671 117.33 129.627 117.277 129.573 117.237C129.519 117.196 129.456 117.168 129.389 117.156C129.323 117.143 129.254 117.146 129.189 117.165Z"
              fill="#191919"
            />
            <path
              d="M80.2498 105.295C81.8223 103.088 83.071 100.637 85.9185 99.8659C88.5794 99.1472 91.4279 99.7858 94.0384 98.7477C94.936 98.4409 95.7255 97.8804 96.3111 97.1341C96.8967 96.3878 97.2534 95.4878 97.338 94.5429C97.338 93.1318 96.4327 91.8809 97.1514 90.5235C97.9195 89.0334 99.7334 88.8469 101.091 88.1819C101.464 87.9954 101.304 87.3041 100.878 87.3568C100.585 87.3831 96.9122 88.0492 95.4221 88.4749C94.4345 88.7404 92.9729 88.9797 92.3617 89.9387C91.7758 90.8165 92.3618 91.4551 92.8138 92.2002C94.011 94.1962 91.7495 95.9529 89.9389 96.1131C86.7458 96.4325 83.8446 94.409 80.5977 94.7821C78.1066 95.189 75.7967 96.3396 73.9711 98.0828C73.4115 99.439 71.4956 103.91 72.0805 104.549C72.6346 105.215 79.9799 105.667 80.2498 105.295Z"
              fill="#191919"
            />
            <path
              d="M90.865 22.8492C90.9748 15.6345 91.3972 8.42419 91.3182 1.21169C91.3182 0.732172 90.5194 0.732172 90.4931 1.21169C90.0936 8.37042 90.0673 15.5566 89.9334 22.7186C89.9334 23.3221 90.8563 23.456 90.865 22.8492Z"
              fill="#38A1FF"
            />
            <path
              d="M100.686 27.4216C103.718 23.5811 106.831 19.7833 109.684 15.8177C109.95 15.4447 109.364 14.9926 109.071 15.3382C105.905 19.0109 102.977 22.8964 99.9967 26.7029C99.5951 27.2383 100.286 27.9263 100.686 27.4216Z"
              fill="#38A1FF"
            />
            <path
              d="M111.252 39.291C113.548 38.3506 115.83 37.3751 118.092 36.3108C118.544 36.0913 118.225 35.2991 117.745 35.4856C115.404 36.4172 113.115 37.5079 110.826 38.5459C110.267 38.7599 110.722 39.5083 111.252 39.291Z"
              fill="#38A1FF"
            />
            <path
              d="M72.1024 22.87C70.5355 20.9509 63.9583 13.1294 62.308 11.2662C61.9624 10.8931 61.2963 11.4264 61.6167 11.8247C63.1595 13.8207 69.8662 21.5664 71.5165 23.4823C71.8632 23.9344 72.4492 23.2947 72.1024 22.87Z"
              fill="#38A1FF"
            />
            <path
              d="M68.2169 42.1121C61.8636 38.3912 55.5981 34.4739 49.1877 30.8539C49.0959 30.801 48.9868 30.7866 48.8844 30.8141C48.782 30.8416 48.6948 30.9086 48.6418 31.0004C48.5888 31.0922 48.5745 31.2013 48.602 31.3037C48.6295 31.4061 48.6965 31.4934 48.7883 31.5463C55.0154 35.4582 61.4302 39.1319 67.7638 42.8835C67.8657 42.938 67.9848 42.951 68.0961 42.9197C68.2074 42.8883 68.3023 42.8152 68.3608 42.7155C68.4194 42.6158 68.4371 42.4973 68.4103 42.3849C68.3835 42.2724 68.3142 42.1747 68.2169 42.1121Z"
              fill="#38A1FF"
            />
            <path
              d="M64.7298 53.6897C61.8559 54.4084 58.9547 55.047 56.1072 55.9248C56.0146 55.9608 55.9387 56.0298 55.8941 56.1186C55.8495 56.2073 55.8395 56.3095 55.8661 56.4052C55.8926 56.501 55.9537 56.5834 56.0377 56.6366C56.1216 56.6897 56.2222 56.7098 56.3201 56.693C59.2213 56.107 62.0688 55.2292 64.9426 54.483C65.0387 54.4471 65.118 54.3766 65.165 54.2854C65.212 54.1942 65.2233 54.0887 65.1967 53.9896C65.1701 53.8905 65.1075 53.8048 65.0212 53.7494C64.9349 53.6939 64.8309 53.6726 64.7298 53.6897Z"
              fill="#38A1FF"
            />
          </svg>
        </div>
      </div>
      <p className="text-2xl w-full text-center text-[#333]">
        Congratulations! You are ready to go
      </p>
      <p className="w-[60%]  text-base mt-4 mb-10 m-auto text-center text-[#333]">
        Thank you for completing your onboarding! Now you can explore how
        amazing this product is.
      </p>
      <button
        type="button"
        className="flex text-white items-center text-base bg-blue-700 hover:bg-blue-900 rounded-lg px-6 py-3 border border-blue-700 m-auto"
      >
        Go to Dashboard
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          className="ml-2 fill-white "
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M13.2812 9.18552C12.9688 9.49802 12.5 9.30271 12.5 8.87302V6.09958H0.46875C0.195312 6.09958 0 5.90427 0 5.63083V4.38083C0 4.10739 0.195312 3.91208 0.46875 3.91208H12.5V1.13864C12.5 0.708956 12.9688 0.513644 13.2812 0.787081L17.1484 4.65427C17.3438 4.84958 17.3438 5.16208 17.1484 5.31833L13.2812 9.18552Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default EndSummaryMainContent;