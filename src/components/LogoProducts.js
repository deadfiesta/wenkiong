import React from 'react'

const LogoProduct = ({ brand, subtitle }) => {
    const logo = (brand) => {
        switch (brand) {
            case 'garena':
                return (
                    <svg className="logo__big" brand={brand} id={brand} viewBox="0 0 72 72" fill="#E41E26" >
                        <path d="M41.9831 11.549L42.0931 11.5803L42.1088 11.549H41.9831ZM43.2818 11.0429L42.6534 11.3038L42.3915 11.3246L42.2659 11.2881L42.1978 11.3403L42.1088 11.5438L42.5696 11.5333L42.6324 11.429L44.8004 11.262L47.7644 11.0951L45.1041 10.9438L44.8894 11.1368L44.5229 11.116L44.4757 11.0534L44.2506 10.9751L43.8264 11.1994H43.5646L43.5017 10.8186L43.2818 11.0429ZM42.3287 3.97924L42.1559 4.13053L41.7213 4.17226L41.6794 4.31833L41.229 4.3392C41.229 4.3392 35.5996 6.56161 28.8862 7.7928C29.059 7.59977 29.2109 7.39109 29.2109 7.39109C29.2109 7.39109 26.7182 7.98582 26.1108 8.55968C25.938 8.32492 25.7652 8.15798 25.7652 8.15798L25.6133 8.35101L25.7652 8.58577L25.6761 8.78923L25.4143 8.89357H25.2415L25.1787 8.72662L24.4874 8.70054L24.4193 9.06051L24.2256 9.18571L23.7072 9.52481L23.5082 9.6761L22.9426 9.63437L22.8326 9.31614C22.8326 9.31614 20.9684 10.8656 19.345 11.3507C21.1831 9.44134 25.0373 6.69203 25.0373 6.69203L25.0163 6.46248L24.7126 6.44162C24.7126 6.44162 17.6536 11.0168 16.6377 11.9037C17.3289 11.2047 17.9783 10.6934 17.9783 10.6934C17.9783 10.6934 14.9724 12.1959 14.4278 13.6149C14.3178 13.4271 14.276 13.3384 14.276 13.3384C14.276 13.3384 14.9043 12.9158 15.2081 11.9037C15.8365 10.7821 16.8105 9.6761 16.8105 9.6761L15.2081 11.3507L14.6896 11.4551L14.0036 12.535L14.1136 12.6184L13.2024 13.5888L13.3962 13.907L13.3124 14.267L13.0925 14.0583L12.8568 13.6983L9.93477 16.745L9.7829 16.4685L7.64111 18.3518L8.76699 18.0597L5.625 21.0907C5.625 21.0907 9.97666 22.9949 17.1875 19.6926C24.257 16.4581 32.1277 18.7431 32.1277 18.7431C32.1277 18.7431 15.826 20.9655 12.1865 33.6009C8.7827 45.4224 22.1257 50.8793 28.6872 50.9419L37.2177 50.8793C37.2177 50.8793 36.118 50.7488 35.0131 50.368C37.888 50.1802 39.082 49.7994 39.082 49.7994C39.082 49.7994 38.9511 49.8202 38.087 49.5437C43.1561 49.0951 44.4967 48.2969 44.4967 48.2969L43.9783 48.1717V48.0621C43.9783 48.0621 47.7644 47.7022 54.4358 44.4833C50.7964 45.9649 46.6804 46.2623 46.6804 46.2623L47.2669 45.605C47.2669 45.605 47.6544 45.7093 47.8953 45.6258C49.084 45.0102 49.1049 44.1234 49.1049 44.1234C49.1049 44.1234 49.1259 44.8224 49.6495 44.2694C50.257 43.7373 49.7805 43.2939 49.7805 43.2939L49.4348 43.1478C49.4348 43.1478 50.1051 42.4487 50.8016 41.9218C50.4089 41.7497 50.456 41.1549 50.456 41.1549L50.8645 41.1132L50.9744 40.8576L50.6498 40.7324L50.4089 40.5237L50.7807 40.4194C50.7807 40.4194 53.1162 37.0336 56.7138 34.0026C55.2213 34.7434 54.7815 34.9781 54.7815 34.9781C54.7815 34.9781 55.4518 33.8617 60.6046 30.8515C64.0765 28.8222 64.8306 27.0588 64.8306 27.0588C64.8306 27.0588 62.2856 30.7994 58.1382 30.7003C53.7184 30.5959 50.435 31.1802 50.4089 31.1854C50.4298 31.1802 52.4512 30.7994 53.5927 29.683C53.5927 29.683 49.6391 31.0341 47.2931 29.4899C41.9464 25.9737 33.2169 27.5232 33.2169 27.5232C33.2169 27.5232 24.9954 28.5457 23.2987 34.7642C22.0838 39.209 27.2838 40.435 27.2838 40.435C27.2838 40.435 30.6038 41.2071 31.8292 38.1083C32.5623 36.2406 30.9599 35.1398 30.9599 35.1398C30.9599 35.1398 28.2631 32.5418 30.2687 30.3559C32.5205 27.8988 39.3648 29.5056 39.3648 29.5056C39.3648 29.5056 48.6336 31.7541 42.5696 42.4226C38.6264 49.1994 30.054 48.5212 30.054 48.5212C30.054 48.5212 21.3507 48.9021 20.2667 39.9655C19.963 37.2944 20.3557 35.8546 20.3557 35.8546L20.7642 35.5102L20.5861 35.3798V35.2077C20.5861 35.2077 20.6018 35.0303 20.9422 35.0303C21.2826 35.0303 21.1203 34.6495 21.1203 34.6495L20.7485 34.6182C20.7485 34.6182 20.7327 34.2217 21.1045 33.9191C20.9265 33.8721 20.9422 33.773 20.9422 33.773C20.9422 33.773 21.1203 33.3609 21.4921 33.5174C21.5235 34.1069 21.9005 33.6948 21.9005 33.6948C21.9005 33.6948 21.513 33.7574 21.7539 32.9018C22.1624 32.0462 23.461 31.3002 23.461 31.3002C23.461 31.3002 23.2673 31.2845 23.0892 31.0915C24.278 30.7107 24.744 29.7403 24.744 29.7403L24.5503 29.6934C24.5503 29.6934 24.4036 29.8968 24.0999 29.8499C24.1628 29.6099 24.2623 29.5004 24.2623 29.5004L24.0999 29.4691V29.1195L23.6757 29.0882C23.6757 29.0882 23.3668 28.8952 23.6915 28.5613C24.5398 28.3996 24.4717 27.5597 24.4717 27.5597L24.7807 27.6536L24.9901 27.3353L25.1211 26.9858L25.2834 26.8137L25.7861 27.0223L26.0794 27.1632L26.8125 27.784L26.2103 26.7458L26.3412 26.4798L26.4198 26.2241L26.0165 26.1772L26.0008 25.9894L26.4198 25.8277L26.4512 25.7025L26.5716 25.6764L26.6345 25.2955L27.2681 25.2486L27.5613 24.6121C27.5613 24.6121 30.9128 20.0004 38.8359 20.4542C44.8109 20.7933 46.3347 24.3304 53.4723 23.84C57.803 23.5479 58.9708 24.007 58.9708 24.007C58.9708 24.007 56.7662 22.4836 54.4254 22.3584C56.8081 22.228 58.6671 21.9776 58.6671 21.9776L58.3633 21.8211L58.0701 21.6646L57.8449 21.5654L57.5517 21.7585L57.1641 21.7898L56.5462 21.5341L56.253 21.4402L55.9597 21.4715L55.6665 21.8211L55.2423 21.7585L54.0431 21.5341L55.3418 21.4715L55.7293 21.2159L56.0226 21.0594H56.4205L56.452 21.2785L57.1013 21.3411L57.3946 21.5289L57.8187 21.3411L58.2429 21.4663L58.5676 21.3411L58.8922 21.1794L59.1227 21.1168L59.4787 21.2107L60.0653 20.7047L60.3585 20.6734L60.5523 20.9916L60.7198 21.122L60.5523 21.3724H60.8769L60.9764 20.9603L60.9136 20.7986L61.3692 20.6734H61.8562L61.919 20.9916L62.0814 20.7986L62.1128 20.5794L62.537 20.2977L64.1603 19.4369L64.7102 19.2752L64.972 19.0874L66.1764 18.957C66.1764 18.957 67.8364 18.4509 69.198 16.7346C69.198 16.7346 63.8356 20.1308 55.8497 18.2892C50.2832 17.0059 49.3877 15.6547 49.3877 15.6547L49.8119 15.493L49.1625 15.3051L48.8379 15.1486L48.2514 15.2112L47.7958 14.8617H46.9213L46.7903 14.6374L45.9158 14.5748L45.8163 14.4131L47.5706 14.3818L47.9581 14.7365L48.3823 14.6687L48.9007 14.9243L49.1311 14.9556L49.4244 15.1486H50.0109L50.2046 15.3991L50.0423 15.5921L50.3355 15.9103L50.7283 16.0042V15.5921L50.4979 15.3365L50.7283 14.9869H50.4036L50.2413 14.8565L50.1732 14.2826L49.7857 14.1887C49.7857 14.1887 43.8054 10.6308 38.8725 12.6654C38.8725 12.6654 39.1658 12.3159 39.7051 12.1228C39.857 12.102 39.747 11.9507 39.747 11.9507L39.878 11.8881L40.5692 11.9298L40.5011 11.7837L41.4961 11.7629L41.4332 11.549L41.9988 11.5385L41.4123 11.3768L41.1662 11.6898L40.9672 11.4707L40.6739 11.3768L40.7211 11.7107L40.3702 11.6324L39.9356 11.7576L39.6318 11.8203L39.281 11.7576L39.26 11.5646L38.8725 11.8203L38.6526 11.7785L38.3488 11.7368L38.307 11.1838L38.8463 10.8656C38.8463 10.8656 34.4528 10.6986 30.4467 12.222C26.4407 13.7453 26.0322 14.4444 21.5706 15.3573C25.0111 14.2774 27.0272 12.9419 28.0641 12.3054C30.9442 10.6986 36.9873 7.47978 39.0401 6.29033C39.0767 6.07643 39.1396 6.07643 39.1396 6.07643L39.3805 6.22251L39.7051 5.86254L40.0508 5.77907V5.65386L40.5901 5.633L40.6111 5.43997L40.8729 5.46084L40.9358 5.26781L41.3913 5.14261L40.852 5.08L40.831 4.93393L41.3913 4.89219L41.4594 4.72525L41.737 4.87133L42.2135 4.36529L42.6062 4.30268L42.8262 3.9375L42.3287 3.97924Z" />
                        <path d="M21.8093 65.0203H21.05L20.9086 63.0483H20.8771C20.1335 64.5977 18.6411 65.2498 17.0439 65.2498C13.5511 65.2498 11.8125 62.5631 11.8125 59.6051C11.8125 56.6472 13.5511 53.9604 17.0439 53.9604C19.369 53.9604 21.2647 55.1916 21.6679 57.5601H20.6101C20.4687 56.3133 19.1491 54.8421 17.0387 54.8421C14.1062 54.8421 12.8598 57.2419 12.8598 59.6104C12.8598 61.9788 14.1009 64.3786 17.0387 64.3786C19.4894 64.3786 20.919 62.6936 20.8719 60.4033H17.1015V59.5217H21.804V65.0203H21.8093Z" />
                        <path d="M23.5634 59.5894C23.6577 57.7531 24.9773 56.9653 26.8101 56.9653C28.224 56.9653 29.7584 57.3879 29.7584 59.4851V63.643C29.7584 64.0082 29.9416 64.2168 30.3292 64.2168C30.4391 64.2168 30.5648 64.1855 30.6381 64.1542V64.9576C30.4234 65.0046 30.2663 65.015 29.9992 65.015C29.0043 65.015 28.8524 64.4672 28.8524 63.6482H28.821C28.1402 64.6655 27.4385 65.2446 25.9042 65.2446C24.4274 65.2446 23.2178 64.5298 23.2178 62.9543C23.2178 60.7528 25.4067 60.6798 27.5171 60.4346C28.3235 60.3459 28.7739 60.2363 28.7739 59.3703C28.7739 58.0817 27.826 57.7635 26.6792 57.7635C25.4695 57.7635 24.5688 58.3113 24.5374 59.5842H23.5634V59.5894ZM28.7791 60.7424H28.7477C28.622 60.9719 28.1874 61.045 27.9255 61.0919C26.2655 61.3788 24.2023 61.3632 24.2023 62.897C24.2023 63.8516 25.0715 64.4464 25.988 64.4464C27.4752 64.4464 28.7948 63.523 28.7791 61.9892V60.7424V60.7424Z" />
                        <path d="M31.7119 57.1898H32.6126V59.0262H32.644C33.1415 57.7637 34.2255 57.0229 35.6708 57.0855V58.0402C33.9008 57.9463 32.6912 59.2244 32.6912 60.8468V65.0204H31.7119V57.1898V57.1898Z" />
                        <path d="M36.8962 61.3632C36.912 62.7613 37.6556 64.4464 39.5355 64.4464C40.9651 64.4464 41.7402 63.6273 42.0491 62.4431H43.0284C42.6094 64.2168 41.5516 65.2498 39.5355 65.2498C36.9905 65.2498 35.917 63.3352 35.917 61.1076C35.917 59.0417 36.9853 56.9653 39.5355 56.9653C42.112 56.9653 43.1383 59.1669 43.0598 61.3684H36.8962V61.3632ZM42.0753 60.5598C42.0282 59.1199 41.1118 57.7687 39.5303 57.7687C37.9331 57.7687 37.0481 59.1356 36.891 60.5598H42.0753Z" />
                        <path d="M44.3584 57.1897H45.3377V58.5409H45.3691C45.7252 57.6019 46.7987 56.9602 47.9298 56.9602C50.1816 56.9602 50.8623 58.1131 50.8623 59.9808V65.0203H49.8831V60.1321C49.8831 58.7809 49.4327 57.7636 47.8513 57.7636C46.3012 57.7636 45.3691 58.9165 45.3377 60.4503V65.0203H44.3584V57.1897Z" />
                        <path d="M52.6164 59.5894C52.7107 57.7531 54.0303 56.9653 55.8631 56.9653C57.277 56.9653 58.8113 57.3879 58.8113 59.4851V63.643C58.8113 64.0082 58.9999 64.2168 59.3874 64.2168C59.4973 64.2168 59.6178 64.1855 59.6963 64.1542V64.9576C59.4764 65.0046 59.3245 65.015 59.0627 65.015C58.0677 65.015 57.9159 64.4672 57.9159 63.6482H57.8845C57.2037 64.6655 56.502 65.2446 54.9676 65.2446C53.4909 65.2446 52.2812 64.5298 52.2812 62.9543C52.2812 60.7528 54.4702 60.6798 56.5805 60.4346C57.387 60.3459 57.8373 60.2363 57.8373 59.3703C57.8373 58.0817 56.8895 57.7635 55.7427 57.7635C54.533 57.7635 53.6323 58.3113 53.6009 59.5842H52.6164V59.5894ZM57.8321 60.7424H57.8007C57.6802 60.9719 57.2404 61.045 56.9785 61.0919C55.3185 61.3788 53.25 61.3632 53.25 62.897C53.25 63.8516 54.1193 64.4464 55.0357 64.4464C56.5282 64.4464 57.8426 63.523 57.8269 61.9892V60.7424H57.8321Z" />
                    </svg>
                )
            case 'shopee':
                return (
                    <svg className="logo__big" brand={brand} id={brand} viewBox="0 0 72 72">
                        <path d="M51.1808 50.2334C53.2734 50.1775 54.9695 48.501 55.1482 46.4222L55.1617 46.1716L56.6441 16.553C56.6454 16.5384 56.6454 16.5237 56.6454 16.5077C56.6454 16.0267 56.2516 15.6362 55.7664 15.6362C55.7624 15.6362 55.757 15.6362 55.753 15.6362H46.2458C46.0119 9.51685 41.5742 4.6355 36.1351 4.6355C30.6961 4.6355 26.2597 9.51685 26.0258 15.6375H16.4917C16.0133 15.6455 15.6289 16.0333 15.6289 16.5091C15.6289 16.5317 15.6303 16.5544 15.6316 16.577L16.9836 46.0784L17.0038 46.4488C17.2108 48.5024 18.7227 50.1548 20.7803 50.2308L51.0276 50.2348L51.1808 50.2334ZM36.1351 7.29805C40.0985 7.29805 43.328 11.0014 43.4799 15.6375H28.7917C28.9422 11.0014 32.1731 7.29805 36.1351 7.29805Z" fill="#EF4F2C" />
                        <path d="M43.6881 38.7849C43.4166 40.9877 42.0605 42.7535 39.9612 43.637C38.792 44.1287 37.2263 44.3939 35.9831 44.3099C34.0518 44.2366 32.2361 43.7742 30.5629 42.928C29.9541 42.6202 29.0617 42.0125 28.3883 41.4555C28.2351 41.3289 28.1558 41.2156 28.3037 41.0104C28.4609 40.7759 29.0832 39.8857 29.1813 39.7378C29.313 39.5379 29.5307 39.5272 29.7296 39.6818C29.7565 39.7031 29.9594 39.8577 29.9998 39.8883C31.6098 41.1303 33.6863 42.0632 35.9952 42.1498C38.9062 42.1111 41.0176 40.8252 41.3939 38.8356C41.8092 36.6421 40.0446 34.7605 36.6443 33.7117C35.5638 33.3785 32.8463 32.3071 32.345 32.0166C29.9769 30.648 28.8735 28.8543 29.0308 26.6449C29.2713 23.5839 32.1528 21.2891 35.8111 21.2744C37.5475 21.2704 39.175 21.6502 40.6252 22.2526C41.1587 22.4738 42.1532 23.0015 42.5081 23.2627C42.7553 23.4413 42.7365 23.6425 42.6384 23.7971C42.4946 24.0343 42.0645 24.6979 41.8912 24.9738C41.7648 25.163 41.6089 25.1857 41.3858 25.0457C39.515 23.8091 37.5918 23.3893 35.8595 23.3546C33.361 23.404 31.4768 24.8658 31.3531 26.8701C31.3209 28.6811 32.7173 29.995 35.6821 30.9985C41.8079 32.9388 44.1275 35.2149 43.6881 38.7849Z" fill="white" />
                        <path d="M16.9445 58.5193C15.6489 58.1075 15.0522 57.5651 15.0522 56.8189C15.0898 55.99 15.8707 55.3663 16.9324 55.3264C17.7939 55.329 18.5572 55.5542 19.3085 56.0313C19.4994 56.1459 19.5934 56.1019 19.705 55.958C19.7171 55.938 19.7574 55.8807 19.8931 55.6875C20.0222 55.5049 20.0719 55.4343 20.0853 55.4116C20.1781 55.2384 20.1781 55.1465 19.9872 55.0119C19.8233 54.8959 19.3663 54.6614 19.1069 54.5588C18.3852 54.2749 17.6353 54.135 16.8853 54.1483C15.1812 54.1843 13.8466 55.281 13.7579 56.7256C13.7028 57.769 14.2404 58.6072 15.3546 59.2242C15.6717 59.3895 16.8074 59.8119 17.3275 59.9625C18.8126 60.3916 19.5733 61.1752 19.4174 62.088C19.2749 62.9182 18.3892 63.4766 17.1326 63.5152C16.2147 63.4966 15.2941 63.1634 14.4958 62.5718C14.4917 62.5691 14.4702 62.5531 14.434 62.5264C14.3883 62.4931 14.3735 62.4811 14.3721 62.4811C14.1974 62.3612 14.0697 62.3612 13.9501 62.5411C13.9461 62.5478 13.8493 62.693 13.7526 62.8369C13.6397 63.0048 13.5913 63.0781 13.5644 63.1195C13.4623 63.27 13.4797 63.3513 13.6303 63.4766L13.6316 63.4779C13.9528 63.7338 14.3654 64.0016 14.6463 64.1376C15.4218 64.512 16.2604 64.7093 17.1461 64.7279C17.7213 64.7559 18.443 64.6213 18.9819 64.3841C19.959 63.9537 20.5826 63.1141 20.6928 62.08C20.8689 60.4009 19.7614 59.3548 16.9445 58.5193Z" fill="#EF4F2C" />
                        <path d="M24.8458 58.0999C24.1617 58.0999 23.5072 58.3184 22.9656 58.7155V54.3805C22.9656 54.2113 22.8984 54.146 22.7277 54.146H21.9361C21.748 54.146 21.6982 54.2073 21.6982 54.3805V64.4551C21.6982 64.6203 21.748 64.6896 21.9361 64.6896H22.7277C22.8997 64.6896 22.9656 64.6176 22.9656 64.4551V61.1649C22.9656 60.0734 23.8123 59.3338 24.8458 59.3338C25.8807 59.3338 26.726 60.0748 26.726 61.1729V64.4564C26.726 64.647 26.7731 64.6909 26.9639 64.6909H27.7528C27.941 64.6909 27.9907 64.6456 27.9907 64.4564V61.1635C27.9826 59.4751 26.5634 58.0999 24.8458 58.0999Z" fill="#EF4F2C" />
                        <path d="M32.3962 58.1064C30.5173 58.1064 28.9946 59.5856 28.9946 61.4113C28.9946 63.237 30.5173 64.7162 32.3962 64.7162C34.2737 64.7162 35.7978 63.237 35.7978 61.4113C35.7978 59.5856 34.2737 58.1064 32.3962 58.1064ZM32.3949 63.5022C31.2055 63.5022 30.2418 62.5654 30.2418 61.4113C30.2418 60.2559 31.2055 59.3191 32.3949 59.3191C33.5843 59.3191 34.5479 60.2559 34.5479 61.4113C34.5492 62.5654 33.5856 63.5022 32.3949 63.5022Z" fill="#EF4F2C" />
                        <path d="M58.1117 61.8565C58.1171 61.8565 58.1225 61.8565 58.1292 61.8565C58.3375 61.8472 58.5015 61.6713 58.5015 61.4594C58.5015 61.4501 58.5015 61.4407 58.5001 61.4314C58.5001 61.4274 58.5001 61.4207 58.5001 61.4074C58.5001 59.5817 57.0567 58.1025 55.2759 58.1025C53.4952 58.1025 52.0518 59.5831 52.0518 61.4074C52.0518 61.5433 52.0598 61.6793 52.0759 61.8139L52.0813 61.8565H52.0827C52.1714 62.5175 52.4563 63.1198 52.8998 63.6036C52.9011 63.6049 52.9011 63.6049 52.9038 63.6076C53.3971 64.1459 54.0691 64.5151 54.815 64.6537L54.8727 64.6643V64.663C54.8996 64.667 54.9265 64.671 54.9601 64.6763C55.9815 64.7989 56.8417 64.6337 57.5392 64.2858C57.7273 64.1912 57.89 64.09 58.0257 63.9887C58.0727 63.9527 58.1144 63.9194 58.148 63.8901C58.1682 63.8714 58.1829 63.8581 58.191 63.8514C58.3711 63.6675 58.3792 63.5876 58.2716 63.421C58.0217 63.0265 57.8819 62.8346 57.8819 62.8346C57.7838 62.7134 57.6964 62.6854 57.5714 62.7947C57.5499 62.8133 57.5298 62.8266 57.519 62.8386C56.7745 63.4943 55.7974 63.6235 54.9453 63.4463C54.7706 63.3997 54.6066 63.341 54.4561 63.2691C53.8755 62.9799 53.4549 62.4628 53.3339 61.8565H58.0983C58.0996 61.8565 58.105 61.8565 58.1117 61.8565ZM53.4092 60.6438C53.6565 59.8443 54.4037 59.3112 55.2759 59.3112C56.1173 59.3112 56.9062 59.8816 57.1763 60.6438H53.4092Z" fill="#EF4F2C" />
                        <path d="M40.1856 58.0891C39.4034 58.0891 38.6629 58.3556 38.0702 58.8354V58.325C38.0702 58.1477 38.0205 58.0904 37.8323 58.0904H37.0797C36.8915 58.0904 36.8418 58.1424 36.8418 58.325V67.8358C36.8418 68.0091 36.8915 68.0704 37.0797 68.0704H37.8323C38.0205 68.0704 38.0702 68.0104 38.0702 67.8358V63.9553C38.6615 64.4337 39.4021 64.7015 40.1856 64.7015C42.0308 64.7015 43.528 63.221 43.528 61.3953C43.528 59.5696 42.0322 58.0891 40.1856 58.0891ZM40.1856 63.4849C39.0378 63.4849 38.0997 62.5787 38.0715 61.4473V61.3394C38.0997 60.208 39.0378 59.3018 40.1856 59.3018C41.3535 59.3018 42.301 60.2386 42.301 61.3927C42.2996 62.548 41.3535 63.4849 40.1856 63.4849Z" fill="#EF4F2C" />
                        <path d="M51.0343 61.406C51.0343 59.5803 49.5909 58.1011 47.8101 58.1011C46.0294 58.1011 44.5859 59.5816 44.5859 61.406C44.5859 61.5419 44.594 61.6778 44.6101 61.8124L44.6155 61.855H44.6168C44.7055 62.516 44.9905 63.1184 45.434 63.6021C45.4353 63.6034 45.4353 63.6034 45.438 63.6061C45.9312 64.1445 46.6032 64.5136 47.3491 64.6522L47.4069 64.6629V64.6615C47.4338 64.6655 47.4607 64.6695 47.4943 64.6748C48.5157 64.7974 49.3758 64.6322 50.0733 64.2844C50.2615 64.1898 50.4241 64.0885 50.5599 63.9872C50.6069 63.9512 50.6486 63.9179 50.6822 63.8886C50.7023 63.87 50.7171 63.8566 50.7252 63.85C50.9053 63.6661 50.9133 63.5861 50.8058 63.4195C50.5558 63.0251 50.4161 62.8332 50.4161 62.8332C50.3179 62.7119 50.2306 62.6839 50.1056 62.7932C50.0841 62.8119 50.0639 62.8252 50.0532 62.8372C49.3086 63.4928 48.3316 63.6221 47.4795 63.4448C47.3048 63.3982 47.1408 63.3396 46.9903 63.2676C46.4097 62.9784 45.989 62.4614 45.8681 61.855H50.6324C50.6365 61.855 50.6418 61.855 50.6472 61.855C50.6526 61.855 50.658 61.855 50.6647 61.855C50.873 61.8457 51.037 61.6698 51.037 61.4579C51.037 61.4486 51.037 61.4393 51.0356 61.4299C51.0343 61.4273 51.0343 61.4206 51.0343 61.406ZM45.9433 60.6437C46.1906 59.8441 46.9379 59.3111 47.8101 59.3111C48.6514 59.3111 49.4403 59.8814 49.7105 60.6437H45.9433Z" fill="#EF4F2C" />
                    </svg>
                )
            case 'seamoney':
                return (
                    <svg className="logo__big" brand={brand} id={brand} viewBox="0 0 72 72">
                        <path d="M49.1582 9.29526C45.5487 6.634 41.0949 5.0625 36.277 5.0625C24.227 5.0625 14.458 14.8932 14.458 27.0193C14.458 31.2928 15.6712 35.2805 17.7699 38.654C20.9405 37.1709 24.4745 36.3434 28.2007 36.3434C32.435 36.3434 36.421 37.4124 39.9071 39.2966C39.9352 39.3124 39.9633 39.3276 39.9914 39.3428C42.2259 40.5464 44.7792 41.229 47.4903 41.229C49.8091 41.229 52.0113 40.73 53.9981 39.8328C56.5775 36.2267 58.0966 31.8014 58.0966 27.0193C58.096 19.7415 54.5777 13.2906 49.1582 9.29526ZM40.5956 30.3465C40.5956 30.6481 40.3501 30.8952 40.0504 30.8952H32.5042C32.2045 30.8952 31.959 30.6481 31.959 30.3465V22.7534C31.959 22.4518 32.2045 22.2047 32.5042 22.2047H40.0497C40.3494 22.2047 40.595 22.4518 40.595 22.7534V30.3465H40.5956Z" fill="#060083" />
                        <path d="M57.3814 43.5017C54.5297 45.0677 51.2706 45.9773 47.8051 46.0298C47.7009 46.0318 47.5953 46.0325 47.4904 46.0325C47.3936 46.0325 47.2976 46.0318 47.2016 46.0305C46.463 46.0201 45.7333 45.9711 45.0152 45.8848C42.4111 45.5722 39.9565 44.773 37.742 43.5797C37.7303 43.5735 37.7187 43.5673 37.707 43.5604C37.6809 43.5459 37.6542 43.5321 37.6281 43.5176C37.6254 43.5162 37.6226 43.5148 37.6192 43.5127C35.7201 42.4906 33.6387 41.7687 31.4358 41.4078C30.3823 41.2352 29.3015 41.1462 28.2007 41.1462C27.9861 41.1462 27.7728 41.1496 27.5602 41.1565C25.1982 41.2311 22.939 41.7183 20.8521 42.5486C19.3707 43.138 17.975 43.9006 16.6918 44.8109L16.6911 44.8096C16.4614 44.9869 16.174 45.0925 15.862 45.0925C15.1089 45.0925 14.4985 44.4783 14.4985 43.7205C14.4985 43.2664 14.718 42.864 15.0554 42.6142C15.0561 42.6142 15.0561 42.6135 15.0568 42.6128C15.0705 42.6031 15.0842 42.5934 15.0979 42.5838C15.0986 42.5831 15.0993 42.5831 15.1 42.5824C16.3043 41.7259 17.5951 40.9847 18.9564 40.3739C20.1223 39.8507 21.3411 39.4235 22.6009 39.1019C22.8807 39.0308 23.1626 38.9646 23.4459 38.9038C24.1975 38.743 24.9629 38.6188 25.74 38.5346C26.5479 38.447 27.3695 38.4021 28.2007 38.4021C28.4428 38.4021 28.6835 38.4062 28.9236 38.4138C29.868 38.4435 30.7973 38.5312 31.7094 38.6733C34.2785 39.0736 36.705 39.9073 38.9141 41.0972C38.9566 41.12 38.9984 41.1427 39.0409 41.1662C40.9208 42.1773 43.0002 42.8612 45.2045 43.1428C45.9534 43.2388 46.7167 43.2878 47.491 43.2878C48.8284 43.2878 50.1322 43.1407 51.3865 42.8612C53.0428 42.4927 54.6127 41.8936 56.0625 41.0999C56.0694 41.0958 56.0762 41.0923 56.0824 41.0889C56.0886 41.0854 56.0954 41.082 56.1016 41.0785C56.2923 40.9764 56.5097 40.9184 56.7408 40.9184C57.4939 40.9184 58.1042 41.5327 58.1042 42.2905C58.1042 42.815 57.8114 43.2712 57.3814 43.5017Z" fill="#498FF6" />
                        <path d="M51.8042 49.2831C51.8042 49.9754 51.2946 50.5482 50.6328 50.6421C50.6321 50.6421 50.6314 50.6421 50.6308 50.6421C50.6294 50.6421 50.6273 50.6427 50.626 50.6427C50.6253 50.6427 50.6246 50.6427 50.6239 50.6434C50.6232 50.6434 50.6225 50.6434 50.6218 50.6434C50.6205 50.6434 50.6184 50.6441 50.617 50.6441C50.6122 50.6448 50.6074 50.6455 50.6026 50.6462C50.5978 50.6469 50.593 50.6476 50.5875 50.6476C50.5848 50.6483 50.5827 50.6483 50.5807 50.6483C49.8695 50.7352 49.1494 50.7918 48.4217 50.818C48.1131 50.8291 47.8031 50.8353 47.4917 50.8353C46.7352 50.8353 45.9863 50.8022 45.2463 50.7373C44.3156 50.6552 43.3994 50.5233 42.5002 50.3432C40.8796 50.0195 39.3153 49.5406 37.8215 48.9229C37.0129 48.5881 36.2249 48.2134 35.4602 47.8C35.4335 47.7848 35.406 47.7703 35.3793 47.7558C33.2409 46.6039 30.7973 45.9503 28.2021 45.9503C27.3153 45.9503 26.4463 46.0263 25.6014 46.1726C24.2119 46.4134 22.8869 46.8434 21.6538 47.4356L21.6524 47.4328C21.4713 47.5225 21.267 47.5729 21.0509 47.5729C20.2979 47.5729 19.6875 46.9587 19.6875 46.2009C19.6875 45.6846 19.9707 45.2353 20.3898 45.0007C20.3898 45.0007 20.3898 45.0007 20.3905 45.0007C20.4227 44.9848 20.4556 44.9689 20.4885 44.9531C20.5064 44.9448 20.5242 44.9358 20.5427 44.9275C20.5427 44.9275 20.5427 44.9275 20.5434 44.9275C21.2011 44.6149 21.8808 44.3416 22.5796 44.1097C24.3484 43.523 26.2392 43.2056 28.2034 43.2056C28.6081 43.2056 29.0093 43.2194 29.4071 43.2456C32.016 43.4195 34.4733 44.1539 36.6597 45.3306C36.694 45.3492 36.7283 45.3678 36.7626 45.3865C38.663 46.4127 40.726 47.1754 42.9021 47.624C43.1051 47.6661 43.3088 47.7054 43.5139 47.7413C44.5762 47.9304 45.6633 48.0443 46.7709 48.0795C47.0109 48.0871 47.2517 48.0912 47.4931 48.0912C48.0651 48.0912 48.6329 48.0698 49.1946 48.0277C49.5869 47.9987 49.9765 47.9594 50.3626 47.9104L50.3633 47.9138C50.3893 47.9118 50.4161 47.9111 50.4428 47.9111C51.1931 47.9111 51.8042 48.5253 51.8042 49.2831Z" fill="#498FF6" />
                        <path d="M51.9616 60.4617V63.8455C51.9616 64.105 51.7531 64.3149 51.4952 64.3149H50.8622C50.6043 64.3149 50.3958 64.105 50.3958 63.8455V60.7233C50.3958 59.9889 49.8081 59.3843 49.0784 59.3837C48.35 59.383 47.7588 59.9772 47.7588 60.7101V63.8449C47.7588 64.1044 47.5503 64.3142 47.2925 64.3142H46.6588C46.4009 64.3142 46.1924 64.1044 46.1924 63.8449V58.5541C46.1924 58.2946 46.4009 58.0848 46.6588 58.0848H47.2925C47.5503 58.0848 47.7588 58.2946 47.7588 58.5541V58.621C48.2053 58.2021 48.804 57.946 49.4631 57.946C49.793 57.946 50.1078 58.0102 50.3958 58.1269C51.3135 58.4996 51.9616 59.4044 51.9616 60.4617Z" fill="#498FF6" />
                        <path d="M42.3134 57.9661C40.5282 57.9661 39.0811 59.4223 39.0811 61.2188C39.0811 63.0153 40.5282 64.4715 42.3134 64.4715C44.0986 64.4715 45.5457 63.0153 45.5457 61.2188C45.5457 59.4223 44.0986 57.9661 42.3134 57.9661ZM42.3134 63.0153C41.3272 63.0153 40.5282 62.2113 40.5282 61.2188C40.5282 60.2263 41.3272 59.4223 42.3134 59.4223C43.2989 59.4223 44.0986 60.2263 44.0986 61.2188C44.0986 62.2106 43.2996 63.0153 42.3134 63.0153Z" fill="#498FF6" />
                        <path d="M54.177 61.8103H58.759C58.9669 61.8103 59.1356 61.6447 59.1424 61.4376H59.1438C59.1486 61.3652 59.1513 61.2927 59.1513 61.2188C59.1513 59.4479 57.7447 58.0068 55.9938 57.9668C54.1894 58.0061 52.7334 59.4023 52.6874 61.1346C52.6867 61.1622 52.686 61.1905 52.686 61.2188C52.686 61.2471 52.6867 61.2747 52.6874 61.303C52.6984 61.7102 52.7869 62.0981 52.9391 62.4549C53.4363 63.6165 54.6125 64.4412 55.9938 64.4709C56.0198 64.4716 56.0459 64.4716 56.0727 64.4716C56.9135 64.4716 58.0917 64.0906 58.6589 63.5737C59.0354 63.2307 58.9573 62.7924 58.5862 62.5584C58.4257 62.457 58.2227 62.4515 58.0547 62.5391C57.9594 62.5888 57.8442 62.6495 57.7728 62.6882C57.3517 62.9194 56.5761 63.0726 56.0706 63.0726C56.0445 63.0726 55.9437 63.0726 55.9197 63.0726C55.3738 63.0726 54.8834 62.8338 54.546 62.4542C54.3814 62.2693 54.2532 62.0505 54.1729 61.8103H54.177V61.8103ZM54.2079 60.528C54.4802 59.8461 55.1434 59.3644 55.9183 59.3644C55.9423 59.3644 55.967 59.3651 55.991 59.3658C56.7345 59.3947 57.3654 59.8675 57.6288 60.528H54.2079Z" fill="#498FF6" />
                        <path d="M64.7829 58.0854C65.1135 58.0854 65.3391 58.4216 65.2157 58.7301L62.0451 66.6434C61.9738 66.8208 61.803 66.9375 61.6123 66.9375H61.0047C60.6741 66.9375 60.4485 66.6013 60.5719 66.2928L61.5033 63.9677L59.4053 58.7301C59.2819 58.4216 59.5075 58.0854 59.8381 58.0854H60.4457C60.6357 58.0854 60.8072 58.2014 60.8785 58.3795L62.1912 61.657C62.2344 61.7647 62.3859 61.7647 62.4291 61.657L63.7418 58.3795C63.8131 58.2021 63.9839 58.0854 64.1746 58.0854H64.7829Z" fill="#498FF6" />
                        <path d="M38.3975 57.024V63.8455C38.3975 64.105 38.189 64.3149 37.9311 64.3149H37.2974C37.0396 64.3149 36.8311 64.105 36.8311 63.8455V59.2228L34.8929 61.7978C34.7557 61.98 34.4828 61.98 34.3456 61.7978L32.4068 59.2222V63.8455C32.4068 64.105 32.1983 64.3149 31.9404 64.3149H31.3067C31.0488 64.3149 30.8403 64.105 30.8403 63.8455V57.024C30.8403 56.7645 31.0488 56.5547 31.3067 56.5547H32.0282C32.1743 56.5547 32.3114 56.6237 32.3999 56.7403L34.5164 59.5521C34.5678 59.6204 34.67 59.6204 34.7208 59.5521L36.8372 56.7403C36.9257 56.623 37.0629 56.5547 37.209 56.5547H37.9298C38.189 56.5547 38.3975 56.7645 38.3975 57.024Z" fill="#498FF6" />
                        <path d="M10.481 59.8385C9.79246 59.5673 9.24791 59.3533 9.24791 58.902C9.24791 58.4865 9.55516 58.218 10.0311 58.218C10.4234 58.218 10.8349 58.4161 11.1977 58.5907C11.4419 58.708 11.6723 58.8191 11.8095 58.8191C12.232 58.8191 12.5152 58.4037 12.5152 58.0151C12.5152 57.1172 11.1367 56.6389 10.1415 56.6389C8.62175 56.6389 7.56077 57.581 7.56077 58.9309C7.56077 60.2995 8.79526 60.7833 9.78629 61.1712C10.4687 61.4383 11.0071 61.6495 11.0071 62.0926C11.0071 62.5819 10.7396 62.791 10.1134 62.791C9.59357 62.791 9.23968 62.5833 8.92763 62.4004C8.65535 62.2409 8.39817 62.0898 8.05937 62.0898C7.56694 62.0905 7.3125 62.6537 7.3125 62.8938C7.3125 63.7365 8.92831 64.3701 9.97626 64.3701C11.577 64.3701 12.6949 63.4218 12.6949 62.0643C12.6942 60.7102 11.4673 60.2271 10.481 59.8385Z" fill="#060083" />
                        <path d="M19.6775 61.9614C19.4868 61.9614 19.2475 62.1002 18.9704 62.2603C18.5617 62.497 18.0528 62.791 17.4307 62.791C16.3409 62.791 15.5817 62.1837 15.4494 61.2071C15.4453 61.1753 15.4542 61.1429 15.4747 61.1181C15.4953 61.0939 15.5248 61.0794 15.5564 61.0794H19.7886C20.3222 61.0794 20.5492 60.8392 20.5492 60.2754C20.5492 58.5555 19.1268 56.6389 17.0858 56.6389C15.3904 56.6389 13.6367 58.0903 13.6367 60.5183C13.6367 62.7855 15.1229 64.3694 17.2517 64.3694C18.7448 64.3694 20.3839 63.5143 20.3839 62.7358C20.3832 62.3458 20.0335 61.9614 19.6775 61.9614ZM15.4068 59.8054C15.5159 58.8205 16.2058 58.1324 17.0858 58.1324C18.0034 58.1324 18.6522 58.7729 18.7784 59.804C18.7825 59.8357 18.7729 59.8682 18.7523 59.8916C18.7317 59.9158 18.7023 59.9296 18.6714 59.9296H15.5145C15.4837 59.9296 15.4549 59.9158 15.4343 59.8923C15.413 59.8689 15.4034 59.8371 15.4068 59.8054Z" fill="#060083" />
                        <path d="M28.4849 57.9585C28.4849 57.2843 28.4211 56.7252 27.6413 56.7252C27.2078 56.7252 26.845 57.0517 26.797 57.4844C26.7922 57.5306 26.76 57.5686 26.7168 57.5803C26.6736 57.5914 26.6283 57.5748 26.6023 57.5369C26.2113 56.9668 25.555 56.6396 24.8013 56.6396C23.0215 56.6396 21.6279 58.3437 21.6279 60.519C21.6279 62.7503 22.9626 64.3701 24.8013 64.3701C25.5159 64.3701 26.1064 64.0699 26.6077 63.4515C26.6338 63.4198 26.6749 63.4053 26.714 63.4143C26.7531 63.4232 26.7847 63.4543 26.7943 63.495C26.9383 64.063 27.1756 64.2846 27.6413 64.2846C28.4211 64.2846 28.4849 63.7262 28.4849 63.0519V57.9585ZM25.077 62.7055C23.9742 62.7055 23.3974 61.6054 23.3974 60.519C23.3974 59.4521 23.9227 58.3043 25.077 58.3043C26.1523 58.3043 26.7147 59.4182 26.7147 60.519C26.7154 61.6054 26.1523 62.7055 25.077 62.7055Z" fill="#060083" />
                    </svg>
                )
            default:
                return (
                    <svg className="logo__big" brand={brand} viewBox="0 0 33 32">
                        <path d="M5.26434 8.43253C7.57965 8.67624 10.3093 9.23679 13.1851 10.4066C14.1844 10.8209 15.1836 11.1622 16.1585 11.4302C17.1333 11.1622 18.1326 10.8209 19.1318 10.4066C21.9833 9.23679 24.7373 8.67624 27.0526 8.43253C27.4913 8.38378 28.5393 8.26192 30.026 8.26192C28.7343 5.89787 26.8576 3.92377 24.5911 2.48584C22.8119 2.80267 20.8866 3.31448 18.9125 4.11874C16.061 5.28858 13.307 5.84913 10.9917 6.09285C10.553 6.14159 9.45626 6.26345 7.94522 6.26345C6.40981 6.26345 5.33745 6.14159 4.89876 6.09285C4.48445 6.0441 4.04576 5.99536 3.58269 5.92224C2.99777 6.65339 2.4616 7.43329 1.99854 8.26192C2.07165 8.26192 2.14477 8.26192 2.21788 8.26192C3.72892 8.26192 4.82565 8.38378 5.26434 8.43253Z" fill="#FF5722" />
                        <path d="M19.1315 10.4065C18.1323 10.8208 17.1331 11.162 16.1582 11.4301C17.8155 11.8931 19.424 12.1856 20.8376 12.3562C20.8376 12.3562 20.8619 12.3562 20.935 12.3806C22.1293 12.5024 23.226 12.5512 24.1521 12.5755C25.0782 12.5755 26.1506 12.5268 27.3692 12.3806C27.4179 12.3806 27.4667 12.3562 27.4667 12.3562C28.6852 12.21 30.0257 11.9906 31.4392 11.6251C31.098 10.4552 30.635 9.33411 30.0744 8.28613C28.5878 8.28613 27.5398 8.40799 27.1011 8.45673C24.737 8.70045 21.983 9.23663 19.1315 10.4065Z" fill="#00A54A" />
                        <path d="M6.06854 19.1806C6.06854 19.1806 6.09292 19.1806 6.16603 19.2049C7.36024 19.3268 8.45697 19.3755 9.38309 19.3999C10.3092 19.3999 11.3816 19.3512 12.6002 19.2049C12.6489 19.2049 12.6976 19.1806 12.6976 19.1806C14.9642 18.9125 17.5963 18.3519 20.3503 17.2308C23.2018 16.061 25.9558 15.5004 28.2711 15.2567C28.7098 15.208 29.8065 15.0861 31.3176 15.0861C31.5613 15.0861 31.7807 15.0861 32 15.0861C31.9269 13.8675 31.7319 12.6977 31.4151 11.5766C30.0015 11.9422 28.6611 12.1615 27.4425 12.3078C27.4425 12.3078 27.4181 12.3077 27.345 12.3321C26.1508 12.454 25.0541 12.5027 24.128 12.5271C23.2018 12.5271 22.1295 12.4784 20.9109 12.3321C20.8621 12.3321 20.8134 12.3078 20.8134 12.3078C19.3755 12.1371 17.7913 11.8691 16.134 11.3816C15.1592 11.1135 14.1599 10.7723 13.1607 10.358C10.3092 9.18818 7.55522 8.62763 5.23991 8.38391C4.82559 8.38391 3.72887 8.26205 2.19345 8.28643C2.12034 8.28643 2.04722 8.28643 1.97411 8.28643C0.73115 10.5774 0 13.1851 0 15.9879C0 16.6215 0.0487433 17.2552 0.121858 17.8645C2.24219 18.5956 4.28941 18.9856 6.06854 19.1806Z" fill="#00E8FF" />
                        <path d="M7.92063 6.28789C9.45605 6.28789 10.5284 6.16603 10.9671 6.11729C13.2824 5.87357 16.012 5.31302 18.8879 4.14318C20.862 3.33892 22.7874 2.82711 24.5665 2.51028C22.1049 0.926123 19.156 0 15.9877 0C10.9671 0 6.48271 2.31531 3.55811 5.94669C4.02117 6.0198 4.45986 6.06855 4.87418 6.11729C5.31287 6.16603 6.40959 6.28789 7.92063 6.28789Z" fill="#E41E26" />
                        <path d="M5.04515 22.8119C7.36046 23.0556 10.0901 23.6162 12.9659 24.786C15.7199 25.9071 18.3764 26.4676 20.6186 26.7357C20.6186 26.7357 20.643 26.7357 20.7161 26.7601C21.9103 26.882 23.0071 26.9307 23.9332 26.9551C24.8593 26.9551 25.9317 26.9063 27.1502 26.7601C27.199 26.7601 27.2477 26.7357 27.2477 26.7357C27.4915 26.7114 27.7352 26.6626 28.0033 26.6382C30.5135 23.8111 32.0246 20.1066 32.0246 16.0366C32.0246 15.7441 32.0246 15.4516 32.0002 15.1592C31.7809 15.1592 31.5615 15.1592 31.3178 15.1592C29.7824 15.1592 28.71 15.281 28.2713 15.3298C25.956 15.5735 23.2264 16.134 20.3506 17.3039C17.5966 18.425 14.94 18.9855 12.6978 19.2536C12.6978 19.2536 12.6735 19.2536 12.6004 19.278C11.4062 19.3999 10.3094 19.4486 9.3833 19.473C8.45718 19.473 7.38483 19.4242 6.16624 19.278C6.1175 19.278 6.06876 19.2536 6.06876 19.2536C4.28963 19.0586 2.24241 18.6443 0.12207 17.9376C0.317044 19.6192 0.780105 21.2034 1.46251 22.69C1.63311 22.69 1.82809 22.69 2.02306 22.69C3.5341 22.6169 4.60646 22.7388 5.04515 22.8119Z" fill="#478EF7" />
                        <path d="M15.9878 32.0003C20.7403 32.0003 25.0297 29.9287 27.9543 26.6141C27.7106 26.6385 27.4425 26.6873 27.1988 26.7116C27.1988 26.7116 27.1744 26.7116 27.1013 26.736C25.9071 26.8579 24.8103 26.9066 23.8842 26.931C22.9581 26.931 21.8857 26.8822 20.6672 26.736C20.6184 26.736 20.5697 26.7116 20.5697 26.7116C18.3031 26.4435 15.671 25.883 12.917 24.7619C10.0655 23.5921 7.31148 23.0315 4.99617 22.7878C4.55748 22.739 3.46075 22.6172 1.94971 22.6172C1.75474 22.6172 1.58413 22.6172 1.38916 22.6172C3.97256 28.1496 9.5293 32.0003 15.9878 32.0003Z" fill="#000084" />
                    </svg>

                )
        }
    }
    return (
        <div brand={brand} className="logo">
            {logo(brand)}
            <p>{subtitle}</p>
        </div>
    )
}

export default LogoProduct