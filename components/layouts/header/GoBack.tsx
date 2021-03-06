import { useRouter } from "next/router";
import { BackBtn, BackFlex, GobackBox, TItlebar } from "./styled/Goback.styled";

/**
 *
 * @param {*} param0
 * @returns Go back
 */
const GoBack = ({ title }) => {
  let router = useRouter();

  return (
    <GobackBox>
      <BackFlex>
        <BackBtn onClick={() => router.back()}>
          <svg
            height="21"
            viewBox="0 0 21 21"
            width="21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m4.5 8.5-4-4 4-4"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(7 6)"
            />
          </svg>
        </BackBtn>
        <TItlebar>{title}</TItlebar>
      </BackFlex>
    </GobackBox>
  );
};

export default GoBack;
