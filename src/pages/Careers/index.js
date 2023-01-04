import React from "react";

import { Column, Stack, Row, Text, Button, Line, Img } from "components";
import { useNavigate } from "react-router-dom";

const CareersPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/solutions");
  }
  function handleNavigate4() {
    navigate("/vision");
  }
  function handleNavigate11() {
    navigate("/");
  }
  function handleNavigate12() {
    navigate("/solutions");
  }
  function handleNavigate13() {
    navigate("/vision");
  }

  return (
    <>
      <Column className="bg-black_900 flex flex-col font-inter items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[22px] pb-[32px] w-[100%]">
        <Stack className="h-[1583px] relative w-[100%]">
          <Stack className="absolute h-[1583px] w-[100%]">
            <Column
              className="absolute bg-cover bg-no-repeat flex flex-col justify-start sm:p-[15px] md:p-[34px] p-[50px] top-[0] w-[100%]"
              style={{ backgroundImage: "url('images/img_group3.png')" }}
            >
              <Column className="flex flex-col items-center justify-start sm:mb-[349px] md:mb-[452px] mb-[657px] md:ml-[13px] ml-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                    <Text
                      className="common-pointer font-normal not-italic text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                      onClick={handleNavigate11}
                    >
                      Syntics App Development Pvt. Ltd.
                    </Text>
                    <Text
                      className="common-pointer sm:ml-[193px] md:ml-[250px] ml-[430px] not-italic text-white_A700 w-[auto]"
                      variant="body1"
                      onClick={handleNavigate12}
                    >
                      Solutions
                    </Text>
                    <Text
                      className="common-pointer sm:ml-[23px] md:ml-[30px] ml-[44px] not-italic text-white_A700 w-[auto]"
                      variant="body1"
                      onClick={handleNavigate13}
                    >
                      Vision
                    </Text>
                    <Text
                      className="sm:ml-[23px] md:ml-[30px] ml-[44px] not-italic text-red_A200 w-[auto]"
                      variant="body1"
                    >
                      Careers
                    </Text>
                  </Row>
                  <Column className="flex flex-col justify-start mt-[140px] sm:mt-[74px] md:mt-[96px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                    <Text
                      className="not-italic text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Get Started
                    </Text>
                    <Text
                      className="font-semibold leading-[normal] sm:mt-[18px] md:mt-[23px] mt-[34px] text-white_A700 w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Let’s give your business what
                      <br />
                      it needs to grow.
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[91%]">
              <Row className="bg-black_901 border border-gray_400 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:pr-[15px] md:pr-[59px] pr-[86px] w-[100%]">
                <Column
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] p-[122px] sm:p-[15px] md:p-[83px] sm:w-[100%] w-[54%]"
                  style={{ backgroundImage: "url('images/img_group14.png')" }}
                >
                  <Text
                    className="font-normal leading-[normal] text-justify sm:mb-[161px] md:mb-[208px] mb-[303px] sm:mt-[153px] md:mt-[198px] mt-[288px] not-italic text-gray_200 w-[100%]"
                    variant="body2"
                  >
                    Talk to our specialists right away if you have any concerns
                    regarding our services, trials, price, the need for a demo,
                    or anything else. Our team is standing by to assist you.
                    <br />
                    We are close by and ready to help when you need us.
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[25px] md:mt-[33px] mt-[48px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                  <Column className="flex flex-col justify-start rounded-radius5 w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_400 w-[auto]"
                      variant="body2"
                    >
                      Name
                    </Text>
                    <input className="bg-black_901 border border-gray_400 border-solid text-gray_400 text-2xl px-5 sm:h-[39px] md:h-[50px] h-[72px] mt-[11px] sm:mt-[5px] md:mt-[7px] rounded-radius5 w-[100%]"></input>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[28px] md:mt-[37px] mt-[54px] rounded-radius5 w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_400 w-[auto]"
                      variant="body2"
                    >
                      Email
                    </Text>
                    <input className="bg-black_901 border border-gray_400 border-solid text-gray_400 text-2xl px-5 sm:h-[39px] md:h-[50px] h-[72px] mt-[11px] sm:mt-[5px] md:mt-[7px] rounded-radius5 w-[100%]"></input>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[28px] md:mt-[37px] mt-[54px] rounded-radius5 w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_400 w-[auto]"
                      variant="body2"
                    >
                      Phone No.
                    </Text>
                    <input className="bg-black_901 border border-gray_400 border-solid text-gray_400 text-2xl px-5 sm:h-[39px] md:h-[50px] h-[72px] mt-[11px] sm:mt-[5px] md:mt-[7px] rounded-radius5 w-[100%]"></input>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[31px] md:mt-[40px] mt-[59px] rounded-radius5 w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_400 w-[auto]"
                      variant="body2"
                    >
                      Message
                    </Text>
                    <input className="bg-black_901 border border-gray_400 border-solid text-gray_400 text-2xl px-5 sm:h-[119px] md:h-[153px] h-[222px] mt-[11px] sm:mt-[5px] md:mt-[7px] rounded-radius5 w-[100%]"></input>
                  </Column>
                  <Button className="cursor-pointer font-normal min-w-[39%] sm:mt-[33px] md:mt-[43px] mt-[63px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-bluegray_900 text-center w-[max-content]" onClick={handleNavigate11}>
                    Submit
                  </Button>
                </Column>
              </Row>
            </Column>
          </Stack>
        </Stack>
        <Column className="flex flex-col items-center justify-start max-w-[1202px] ml-[auto] mr-[auto] mt-[136px] sm:mt-[72px] md:mt-[93px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                <Text
                  className="leading-[normal] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[52%]"
                  as="h6"
                  variant="h6"
                >
                  Syntics App Development
                  <br />
                  Private Limited
                </Text>
                <Text
                  className="common-pointer sm:ml-[113px] md:ml-[146px] ml-[213px] mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-white_A700 w-[auto]"
                  variant="body1"
                  onClick={handleNavigate3}
                >
                  Solutions
                </Text>
              </Row>
              <Text
                className="common-pointer sm:ml-[295px] md:ml-[381px] ml-[559px] mt-[4px] not-italic text-white_A700 w-[auto]"
                variant="body1"
                onClick={handleNavigate4}
              >
                Vision
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                <Text
                  className="font-normal leading-[normal] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[36%]"
                  variant="body2"
                >
                  Mathura, Uttar Pradesh
                  <br />
                  India
                  <br />
                  8077982617
                  <br />
                  graczone@synticsapp.com
                </Text>
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                  <Text
                    className="ml-[129px] sm:ml-[63px] md:ml-[81px] not-italic text-red_A200 w-[auto]"
                    variant="body1"
                  >
                    Careers
                  </Text>
                  <Text
                    className="sm:mt-[115px] md:mt-[148px] mt-[216px] not-italic text-white_A700 w-[auto]"
                    variant="body4"
                  >
                    © 2023 Copyright : Syntics App Development
                  </Text>
                </Column>
              </Row>
            </Column>
            <Stack className="h-[89px] sm:mt-[26px] md:mt-[33px] mt-[49px] relative w-[13%]">
              <Text
                className="absolute not-italic text-white_A700 top-[0] w-[auto]"
                variant="body1"
              >
                Follow us on:
              </Text>
              <Img
                src="images/img_instagramlogo_33X32.png"
                className="absolute bottom-[16%] h-[33px] left-[7%] max-w-[100%] w-[22%]"
                alt="InstagramLogo"
              />
              <Img
                src="images/img_youtubelast1.png"
                className="absolute bottom-[0] h-[64px] left-[36%] max-w-[100%] w-[22%]"
                alt="youtubelastOne"
              />
              <Img
                src="images/img_linkedinpng81.png"
                className="absolute bottom-[18%] h-[31px] max-w-[100%] right-[14%] w-[22%]"
                alt="linkedInPNGEightyOne"
              />
            </Stack>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default CareersPage;
