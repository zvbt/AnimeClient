<p align="center">
<img src="https://i.imgur.com/ILPk9ZC.png">
</p>
<p align="center">
	<a href="https://github.com/zvbt/AnimeClient/releases/latest"><img src="https://img.shields.io/github/v/release/zvbt/AnimeClient?style=for-the-badge"></a>
	<a href="https://github.com/zvbt/AnimeClient/releases"><img src="https://img.shields.io/github/downloads/zvbt/AnimeClient/total.svg?style=for-the-badge"></a>
	<a href="https://aur.archlinux.org/packages/animeclient-bin"><img src="https://img.shields.io/aur/version/animeclient-bin?style=for-the-badge"></a>
</p>

- I will stop trying to fix the app for multiple screen sizes. If anyone wants to do it, you can open a PR on this repo and the [webpage repo](https://github.com/zvbt/aclient-main-page).

An application that brings together several anime streaming platforms

<details>
  <summary>Preview</summary>
  <img src="https://r2.e-z.host/7ed0180f-b228-49a7-be1e-0183c1938777/vujx89l9.png">
  <img src="https://r2.e-z.host/7ed0180f-b228-49a7-be1e-0183c1938777/m7nj1yhu.png">
  <img src="https://r2.e-z.host/7ed0180f-b228-49a7-be1e-0183c1938777/40vtzzws.png">
  Only this RPC work for now.
</details>

## Building from source

It is recommended to use [Visual Studio Code](https://code.visualstudio.com)

1. Clone repository with
   `git clone https://github.com/zvbt/AnimeClient.git`
2. Install depedencies `npm install`
3. Start the project `npm start`

- You will need to sign the app before using Netflix or Crunchyroll
1. Intall EVS module `python3 -m pip install --upgrade castlabs-evs`
2. If you dont have an account you need to create one `python3 -m castlabs_evs.account signup`
3. Now when ever you build the app with `npm run win` it whille sign the app automatically

Background videos [here](https://github.com/zvbt/aclient-main-page/tree/main/assets/videos)

<br>

- It can be done better but i'm lazy

> [!NOTE]
> For Mac users, please note that you'll need to compile the application yourself, as I currently lack access to a Mac for testing or creating an installer.
