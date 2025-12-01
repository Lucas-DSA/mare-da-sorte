// script.js
// Fonte: Catálogo Mare 24-11.pdf (itens e categorias extraídos).

const products = [
  // === BETTA E ANABANTÍDEOS ===
  { id: 1, name: "Killifish lampeye", price: 12.00, category: "BETTA E ANABANTÍDEOS", ph: "Ácido", available: true, image: "https://imgs.search.brave.com/LVytJ3zQsRXXuXKquQcIy304yEdcwoWAIe9qsD5kVyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/ZGljdGlvbi53b3Js/ZC9pbWcvcHJvZmls/ZS80MzItbm9ybWFu/cy1sYW1wLWV5ZS1r/aWxsaWZpc2gud2Vi/cA" },
  { id: 2, name: "Colisa sangue", price: 6.00, category: "BETTA E ANABANTÍDEOS", ph: "Neutro", available: false, image: "https://imgs.search.brave.com/pW8etRKVdrZ9zOG1fUd9zvS80FdZckI0zcTQwT_faPw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXdzbGkuY29tLmJy/LzYwMHg0NTAvMjc5/OS8yNzk5NDA4L3By/b2R1dG8vMzQxMDkz/ODQzLzAwLTItOWc4/aHEzMjZxdS5qcGc" },
  { id: 3, name: "Trichogaster ouro", price: 6.50, category: "BETTA E ANABANTÍDEOS", ph: "Ácido Neutro", available: false, image: "https://imgs.search.brave.com/23OPyBerfBWzXTaSMXJtFsH2Gjx6tb5RWAc-S8gfmLs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXF1YXJpc21vcGF1/bGlzdGEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzEx/L3RyaWNob2dhc3Rl/ci10cmljaG9wdGVy/dXMtZ29sZGVuLmpw/Zw" },
  { id: 4, name: "Trichogaster moonlight", price: 12.00, category: "BETTA E ANABANTÍDEOS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/gnyRfy_-UpVSzxL-OnVTA--medvo_cbJiG4pcMujvhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmlvYWN1YXRpY2Eu/Y29tL2Nkbi9zaG9w/L3Byb2R1Y3RzL3Ry/aWNob2dhc3Rlci1t/aWNyb2xlcGlzXzgw/MHguanBnP3Y9MTY2/MTQ5MDIyMA" },
  { id: 5, name: "Betta crawtail WR", price: 15.00, category: "BETTA E ANABANTÍDEOS", ph: "NeutroÁcido", available: true, image: "https://imgs.search.brave.com/R5YwzHR08GAYOjdza4seyu1r9AsaTETLnSmq2kcb0ew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VhaG9yc2VhcXVh/cml1bXMuY29tL2lt/YWdlL2NhY2hlL2Nh/dGFsb2cvQ2F0ZWdv/cmllcyUyMC0lMjBG/cmVzaGV3YXRlci9G/cmVzaHdhdGVyJTIw/RmlzaCUyME1lbnUv/Y3Jvd24lMjAyLTEw/MDB4MTAwMC5qcGc" },
  { id: 6, name: "Betta dragon Red", price: 12.00, category: "BETTA E ANABANTÍDEOS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/mOhMu8aGXgYF5HEW02XYhOL6gA_z1Pu4s1oF8AUunpc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3VwcHlmYXJtLmNh/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzA0L05vLTkyLVBL/LVJFRC1EUkFHT04u/anBn" },
  { id: 7, name: "Betta dragon black", price: 15.00, category: "BETTA E ANABANTÍDEOS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/M9D63HUs_YBP9x-BtK3Sjus5mwt-J7Tmc0UTbGFefT8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVm/aXNoZmFybS5jb20u/YXUvY2RuL3Nob3Av/ZmlsZXMvdGhlLWZp/c2gtZmFybS1wcmVt/aXVtLW1hbGUtYmV0/dGEtYmxhY2stZHJh/Z29uLXByZW1pdW0t/bWFsZS1iZXR0YS1v/bmUtb25seS0yLTEy/MDQyNjYxODMuanBn/P3Y9MTc2MjgzODk4/NiZ3aWR0aD0xNTI3" },
  { id: 8, name: "Betta koi", price: 15.00, category: "BETTA E ANABANTÍDEOS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/PlX4fmg78iFy2GDVtHjZWV-PKRcns5zYoUbMH34Og6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1z/dHJvcGljYWxmaXNo/LmNvLnVrL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzEwL01h/bGUtS29pLTRfMTIy/MDU3NTMuanBlZw" },
  { id: 9, name: "Trichogaster marmorato", price: 12.00, category: "BETTA E ANABANTÍDEOS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/7uVXbpfKiZRzFKxC7GN3ou0DRDhK2lg3iGrEvIUCUac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vbXlhcXVh/cml1bS5jb20uYnIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDQvVHJpY29nYXN0/ZXItQXp1bC1Ucmlj/aG9nYXN0ZXItdHJp/Y2hvcHRlcnVzLmpw/Zz9maXQ9NzQ5LDUy/NCZzc2w9MQ" },
  { id:10, name: "Betta femea red dragon", price: 5.00, category: "BETTA E ANABANTÍDEOS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/_hzrFYAAgSThmusz4SLdflRPPS5klyEREsQnK4Zm2_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzc0OTgwNC9i/ZXR0YV9yZWRfZHJh/Z29uX2ZlbWVhXzE2/NjdfMV9kOTIzNTZm/ZTEzMGE2YTYxN2Yy/NzkxMzIwZDA3ZjU1/NS5qcGc" },
  { id:11, name: "Betta femea blue dragon", price: 5.00, category: "BETTA E ANABANTÍDEOS", ph: "NeutroÁcido", available: true, image: "https://imgs.search.brave.com/OWmhJEnwJWVqU2G_R4oE9I53bJBM1-Exin0hL3VoBJY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/c3R1Y2hpLmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8xMC9pbWFnZXMt/NC0xLmpwZw" },
  { id:12, name: "Betta femea dumbo", price: 5.00, category: "BETTA E ANABANTÍDEOS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/8C92BRm0MMaxcFPdWAD0qJCvd0wEHPSahhkrdJfuVjQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk5NTYwNS1NTEI4/ODM4MDA0MzcwM18w/NzIwMjUtRS01LWJl/dHRhLWZtZWEtZHVt/Ym8ud2VicA" },
  { id:13, name: "Betta femea mostard", price: 5.00, category: "BETTA E ANABANTÍDEOS", ph: "NeutroÁcido", available: true, image: "https://i.pinimg.com/736x/b0/40/cf/b040cf47c130e6f9c10add2b5fce250e.jpg" },
  { id:14, name: "Betta Jumbo macho", price: 10.00, category: "BETTA E ANABANTÍDEOS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/rtN6TnLH-vNDvlh7U8CHMKx3YKNhUbNkYM-g621Zoi0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9wZWNlcy1sdWNo/YWRvcmVzLXNpYW1l/c2VzLWhlcm1vc29z/LXBlY2VzLWF6dWxl/cy1yb2pvcy1mb25k/by1uZWdyb18xMDQ4/OTQ0LTE1OTgwOTAz/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA" },

  // === CICLÍDEOS ANÕES ===
  { id:20, name: "Apistogramma cacatuoides double red", price: 35.00, category: "CICLÍDEOS ANÕES", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/5maPCpXDo-xJVcmMPOR3YWO_OM9NQ12-uEjumlZnnnY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXZp/bmdhcXVhLXNob3Au/Y29tL2Nkbi9zaG9w/L3Byb2R1Y3RzL2Fw/aXN0b2dyYW1tYS1j/YWNhdHVvaWRlcy1f/ZG91YmxlLXJlZF9f/bGFyZ2VfNGI2YWQz/NGQtZGFlYS00MDIw/LTg4ZTgtM2ZkM2My/ZjA2YTk1LmpwZz92/PTE2NzkyNjMxNzUm/d2lkdGg9MTQ0NQ" },
  { id:21, name: "Apistogramma cacatuoide gold red", price: 40.00, category: "CICLÍDEOS ANÕES", ph: "NeutroÁcido", available: true, image: "https://imgs.search.brave.com/A15KkJALTqazb9ti7FTuen-bqBMSOva0WgevSFcBN2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/cml1bWZpc2hvbmxp/bmUuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzEx/L0FwaXN0b2dyYW1t/YS1DYWNhdHVvaWRl/cy1SZWQtR29sZC5q/cGc" },
  { id:22, name: "Apistogramma agassizi", price: 15.00, category: "CICLÍDEOS ANÕES", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/zcyJ2el0V0NGx4dmxSW2O4qoz6kB9bD_IScwEpacqik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAz/MTEvMzE0OS9maWxl/cy9BcGlzdG9ncmFt/bWFfYWdhc3Npemlp/LmpwZz92PTE2ODYw/NzI2NTI" },
  { id:23, name: "Ramirezi blue", price: 8.00, category: "CICLÍDEOS ANÕES", ph: "NeutroÁcido", available: true, image: "https://imgs.search.brave.com/wzJRORd6FHh_8sQyxTy_ELiy2HtvrNouph0A-zFtJoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/cGxhbnRlLmZyL2lt/Zy9wLzUvOS8xLzQv/Ni81OTE0Ni5qcGc" },
  { id:24, name: "Biotecus opercularis (indisponível)", price: 15.00, category: "CICLÍDEOS ANÕES", ph: "Ácido Neutro", available: false, image: "https://imgs.search.brave.com/e2m1gE9nrU0ntoM82_diiOgWyMbnO-lyOUy79C-2OH4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzc0OTgwNC9i/aW90ZWN1c19vcGVy/Y3VsYXJpc19iaW90/ZWN1c19vcGVyY3Vs/YXJpc184NDFfMV8y/MDIwMTIxMTAwMTMy/My5wbmc" },

  // === JUMBO ===
  { id:30, name: "Amblydora affinis", price: 35.00, category: "JUMBO", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/IaFxvoWAILtQ9QfHkwrrFarOyRBfxdOAcffFNhOyPxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGxhbmV0Y2F0Zmlz/aC5jb20vaW1hZ2Vz/L21pZChyKS9zaWx1/cmlmb3JtZXMvZG9y/YWRpZGFlL2FtYmx5/ZG9yYXMvYWZmaW5p/cy8zLmpwZw" },
  { id:31, name: "Jundia cinza", price: 10.00, category: "JUMBO", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/zHgWbiBnpj1tWtYgS09MizbdsOeX8CKA3_GZGwE4xPU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2VudHJhbGRvcGVp/eGUuY29tLmJyL2lt/YWdlcy9lc3BlY2ll/cy9ncmQvOTgyZTQ1/NDBlNGI5YTM5YWY2/ZTc1MDdmYzgwZjZl/ZWEuanBn" },
  { id:32, name: "Jundia albino", price: 10.00, category: "JUMBO", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/gQoOemY2tx00FqTr4QMnFVLq4sElbquOvTNfNKn-fI8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF82/Njc2MzEtTUxCNzIx/MjU2MDIzODBfMTAy/MDIzLU8ud2VicA" },
  { id:33, name: "Ariopsis seemanni", price: 45.00, category: "JUMBO", ph: "Ácido Neutro Alcalino", available: true, image: "https://imgs.search.brave.com/xdbWxwn-CaN6hqd3VDsAPr6RP-JbSAtA1YAnbS2yIvs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY29tcHJlbG9h/ZG9taWNpbGlvLmNv/bS9lbHVuaXZlcnNv/ZGVsb3NwZWNlcy9w/cm9kdWN0cy8wNTUz/LzY1MWQ5MGI0YTgx/MzI1MjI2NDEwNDEu/d2VicA" },
  { id:34, name: "Bagre onça", price: 45.00, category: "JUMBO", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/YZDNtGlg2Hv82kxzeX3BSv9fRuXo0_iEUmcfR8dOsyo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVs/b3Jkd29sZi5maWxl/cy53b3JkcHJlc3Mu/Y29tLzIwMTEvMDUv/YmFncmVfamFndWFy/X2FxdWFib25pdG8t/d2ViLmpwZz93PTQ0/OCZoPTI5NQ" },
  { id:35, name: "Oscar Bronze", price: 30.00, category: "JUMBO", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/p82JzNT0l7K_tcsmDfsJB7HhS8f0fkjnNXHkvqru7Og/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy1z/YS1lYXN0LTEuYW1h/em9uYXdzLmNvbS9s/b2phMi8zZTI0ZTEz/MjExZDg0NTQ0YjAx/M2U0YzkwMDlkNDY5/My5qcGc" },
  { id:36, name: "Oscar tigre", price: 20.00, category: "JUMBO", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/NY_HWw2ikHoovLynCd6SGNqzhvVxZMSjQ40tPrVY8lE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/cmlvbWFuaWEuc2hv/cC84MjAyLWhvbWVf/ZGVmYXVsdC9vc2Nh/ci10aWdyZS0xNi0y/MC1jbS1hc3Ryb25v/dHVzLW9jZWxsYXR1/cy5qcGc" },
  { id:37, name: "Oscar tigre albino", price: 40.00, category: "JUMBO", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/HEyx-g3XX4unEGtNlpqwrX0-kt0EvLxymdQ8e05y1bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9pc3Nvbi1vci5j/b20vNjQzNTMtbGFy/Z2VfZGVmYXVsdC9h/c3Ryb25vdHVzLW9j/ZWxsYXR1cy1vc2Nh/ci10aWdyJUMzJUE5/cy1yb3VnZS1hbGJp/bm8tNS02LWNtLmpw/Zw" },
  { id:38, name: "Pangasius do Sol", price: 20.00, category: "JUMBO", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/-A-Y6vhzGASPrNuMsLtxuMtfs4abANDEnPhPt38egbk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzc0OTgwNC9i/YWdyZV9kb19zb2xf/M19hXzVfY21fc3Vu/X2NhdGZpc2hfaG9y/YWJhZ3J1c18yMjg1/XzFfNmJkYzYwMjA4/N2Q3NjY1Yzc3MWU3/ZjRmZGIzODg4NjYu/anBn" },
  { id:39, name: "Green terror", price: 20.00, category: "JUMBO", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/XRybPo8byROC1jqPUXIlpruepGRLpeV4eYWeHr8oh9M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Vu/ZGxlc3NvY2Vhbi9p/bWFnZXMvOC84YS9H/cmVlbl9UZXJyb3Jf/UkxfMi5qcGVnL3Jl/dmlzaW9uL2xhdGVz/dC9zY2FsZS10by13/aWR0aC1kb3duLzQw/MD9jYj0yMDI0MDEw/NzAxMzgyNg" },
  { id:40, name: "Jack dempsey", price: 20.00, category: "JUMBO", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/xthgLFpnFN868m0_tv30E35YS969rrZ12gFae_QF2d0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcxLzRh/L2Y0LzcxNGFmNGVl/MjNkNjIzZmM0MGZi/NzhlNmE5YTA5ZmY2/LmpwZw" },
  { id:41, name: "Jaguar", price: 30.00, category: "JUMBO", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/ABYpPiDAS8uogeUfeF4-vJ3y_6zgBH3DBqIIry6Q3Lg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/ZG9wZXNjYWRvci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDkvY2FyYWN0/ZXJpc3RpY2FzLWRv/LXBlaXhlLWNpY2xp/ZGVvLWphZ3Vhci5q/cGc" },

  // === PEIXES PEQUENOS ===
  { id:50, name: "Barbus conchonios véu", price: 7.00, category: "PEIXES PEQUENOS", ph: "Ácido Neutro Alcalino", available: true, image: "https://imgs.search.brave.com/UaVXbJwbrylHkYkTsZZocp1x0OPAXuIH9wnygRi7fDg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzc0OTgwNC9i/YXJib19jb25jaG9u/aW9fY2VyZWphX3Zl/dV9wZXRoaWFfY29u/Y2hvbml1c191YXVf/MTk0M18xXzdlYzhh/ZjIzMTIwNWY3NWZj/ZGNiM2IyMDg0ZDBk/NWI2LmpwZw" },
  { id:51, name: "Mocinha", price: 7.50, category: "PEIXES PEQUENOS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/uXfW8tEQ7vwwd9iaiKbJpdTBDxPQJrE5n9Dax__UKTk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZWl4/ZW1hbmlhLmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wNy9wZWl4ZS1t/b2NpbmhhMDEtMS5q/cGc" },
  { id:52, name: "Barbus sumatra panda", price: 6.00, category: "PEIXES PEQUENOS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/O09ZnhnO7zigHSPJqS_B1lagJgG4ndZ5UxQRBfPosLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy1z/YS1lYXN0LTEuYW1h/em9uYXdzLmNvbS9s/b2phMi80MjYxMWNi/N2E4YzVjOGJjNjAw/MjMwYWU3MGZkNzQx/YS5qcGc" },
  { id:53, name: "Barbus sumatra red", price: 6.00, category: "PEIXES PEQUENOS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/N-5AU0-wa7xOS40OOq_rs7dSmZlD_lZ4FTPTGTPBd-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZGxvamF2aXJ0dWFs/LmNvbS9zdGF0aWMx/LzEwNzQyNC9za3Uv/cGVpeGVzLWRlLWFn/dWEtZG9jZS1iYXJi/dXMtc3VtYXRyYS1n/YXJyYWZhLXJlZC0x/NzE5MDYxMzcwOTM0/LnBuZw" },
  { id:54, name: "Barbus sumatra albino", price: 12.00, category: "PEIXES PEQUENOS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/XT03ZLZmfyuhQoQ9s8QaN_ZJ0Y4qg03nPHuNsmlqS5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY2Ru/LXVzLm1pdGllbmRh/bnViZS5jb20vc3Rv/cmVzLzAwMS81NTAv/OTc5L3Byb2R1Y3Rz/L2hxNzIwLThmZmJj/Y2U5MGJlYTliYzUw/NDE3NDA0MTg4NTU0/NDE4LTQ4MC0wLndl/YnA" },
  { id:55, name: "Barbus denisonii", price: 45.00, category: "PEIXES PEQUENOS", ph: "Ácido Neutro", available: false, image: "https://imgs.search.brave.com/DpZF8svRPjttSah0qmddSuZvBcFPdBPh9M9luefEnXw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXF1YXBvcnRhaWwu/Y29tL2FxdWFiZGQv/cGhvdG9zL3NhaHlh/ZHJpYS1kZW5pc29u/aWkud2VicA" },

  // === TETRAS ===
  { id:60, name: "Tetra ulreyi", price: 8.00, category: "TETRAS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/08ODKWRh-uKHWNAFzC3iFxNMM5R2uR7lW-5DlDC-dq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXF1YXBvcnRhaWwu/Y29tL2FxdWFiZGQv/cGhvbmVzL2hlbWln/cmFtbXVzLXVscmV5/aS53ZWJw" },
  { id:61, name: "Tetra bentosi white fin", price: 25.00, category: "TETRAS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/x2ZXx6p4kDsBIU5WQeKvZi0F1cGBWMlMcdq-ta1bTu0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kY2Ru/LXVzLm1pdGllbmRh/bnViZS5jb20vc3Rv/cmVzLzAwNC85Nzgv/MzU1L3Byb2R1Y3Rz/L3RldHJhX2JlbnRv/c2lfaHlwaGVzc29i/cnljb25fYmVudG9z/aV83NjA5XzFfYTVk/ODJjNGVjZDBmMTRh/MzdjMzc5ZmY0N2M3/ODU0NzAtNjFlMGE5/NWYwZDVjNzc3ZjBj/MTcyNDc4NDEwMTMw/MDItNDgwLTAud2Vi/cA" },
  { id:62, name: "Tetra Glowlight albino", price: 15.00, category: "TETRAS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/uvcBLgJA-tmQFnmmRy6MTWgiImzKQ8y4JDXLAcPoPFY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZGxvamF2aXJ0dWFs/LmNvbS9zdGF0aWMx/LzEwNzQyNC9za3Uv/dGh1bWJfcGVpeGVz/LWRlLWFndWEtZG9j/ZS10ZXRyYS1nbG93/bGlnaHQtYWxiaW5v/LTItYS0zLWNtLTE3/MjE0OTA3NzY0MDUu/anBn" },
  { id:63, name: "Tetra foguinho amandae", price: 14.00, category: "TETRAS", ph: "Ácido", available: true, image: "https://imgs.search.brave.com/AuwvEhhjkURmHqq4oAG6OkEpnBVD_3GHfht_xL6GzuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzc0OTgwNC90/ZXRyYV9mb2d1aW5o/b190ZXRyYV9hbWFu/ZGFlXzFjbV9oeXBo/ZXNzb2JyeWNvbl9h/bWFuZGFlXzM3OV8x/X2M1MThiYTE3MjQz/MDQwYmI2ZjFmZGIx/ZmIyNDQ3ZDkxLmpw/Zw" },
  { id:64, name: "Tetra olho de fogo balão", price: 6.50, category: "TETRAS", ph: "Ácido", available: true, image: "https://imgs.search.brave.com/JD2U7x7rHUIjiHPZPjetHzjS93kjE3GyizFzMCyBElk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZGxvamF2aXJ0dWFs/LmNvbS9zdGF0aWMx/LzEwNzQyNC9za3Uv/dGh1bWJfcGVpeGVz/LWRlLWFndWEtZG9j/ZS10ZXRyYS1vbGhv/LWRlLWZvZ28tYmFs/YW8tMi1hLTMtY20t/cC0xNzIxNDkyNTc2/MjE4LmpwZw" },
  { id:65, name: "Tetra Buenos Aires", price: 6.50, category: "TETRAS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/qpjQYDLQLyWFv3ml0Ci3FJbwOh_7F4tcBczVLHybujw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/ZGljdGlvbi53b3Js/ZC9pbWcvcHJvZmls/ZS80MzItYnVlbm9z/LWFpcmVzLXRldHJh/MS53ZWJw" },
  { id:66, name: "Tetra pinguim", price: 6.00, category: "TETRAS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/Jga2trMRO9KDiPgcO9-HTqQ03j2O9pqBPJed7K0LUVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG54/Lmp1bXBzZWxsZXIu/Y29tL2Jhc2FsdG8v/aW1hZ2UvNDk5OTI1/NzMvcmVzaXplLzEw/MDAvMTAwMD8xNzE4/OTc3Nzgy" },
  { id:67, name: "Tetra lapis", price: 1.50, category: "TETRAS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/PQU2y9tAI32ezGXoW_kx-SgrN9RWlOMErfYyMH7xlhk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/MDAzMTAtTUxCNTE0/ODIwMzMyNTBfMDky/MDIyLU8tcGN0LWMt/MTAtcGVpeGVzLXRl/dHJhLWxhcGlzLWRv/dXJhZG8tYXF1YXJp/by1hZ3VhLWRvY2Uu/d2VicA" },
  { id:68, name: "Tetra rainbow", price: 15.00, category: "TETRAS", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/-tKp7Yn9qbYTTmmx39DpPpQxrnikCMtPVCE-iJL_glE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy11/cy13ZXN0LTIuYW1h/em9uYXdzLmNvbS9n/ZXRnaWxsc2J1Y2tl/dC9tZWRpYS9pbWFn/ZXMvRGFucy1GaXNo/LWUtYmF5LTU1MTUt/MTM0MTQuanBn" },
  { id:69, name: "Neon cardinal", price: 4.00, category: "TETRAS", ph: "Ácido", available: true, image: "https://imgs.search.brave.com/6riIRYcHXi4yX9Nb35gyUt8_YD5gGLLX9FNRRDqwRCw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdWJz/dGFja2Nkbi5jb20v/aW1hZ2UvZmV0Y2gv/JHNfIXhTT2whLHdf/NTIwLGhfMjcyLGNf/ZmlsbCxmX2F1dG8s/cV9hdXRvOmdvb2Qs/ZmxfcHJvZ3Jlc3Np/dmU6c3RlZXAsZ19h/dXRvL2h0dHBzOi8v/c3Vic3RhY2stcG9z/dC1tZWRpYS5zMy5h/bWF6b25hd3MuY29t/L3B1YmxpYy9pbWFn/ZXMvMGNlNGYzODct/ZDQ0Yy00ZTc1LThi/OWMtNDMxODhhZGFh/NDUwXzMyMHgyMTMu/cG5n" },

  // === CASCUDO / CORYDORA ===
  { id:70, name: "Otocinclus", price: 6.00, category: "CASCUDO/CORYDORA", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/Sq6oCLdQs0Gh3qX1u3_nPJsTTGe-rM2urghbTDtikuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/ZGljdGlvbi53b3Js/ZC9pbWcvcHJvZmls/ZS80MzItY29tbW9u/LW90b2NpbmNsdXMt/NS53ZWJw" },
  { id:71, name: "Corydora julii", price: 9.00, category: "CASCUDO/CORYDORA", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/dte6l0TgHpIsfyxGGnANmFPaBPM06aRXsWwp1LZSxKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGFu/dGVkdGFua21hdGVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/anVsaWktY29yeWRv/cmEtZmlzaC5qcGc" },
  { id:72, name: "Corydora anã", price: 12.00, category: "CASCUDO/CORYDORA", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/_yZ7xFqr8G9_tA1vaAeHRyvj175zvIJRX7sCzk2G9Ts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzY0ODgzNC9j/b3J5ZG9yYV9hbmFf/Y29yeWRvcmFzX2hh/c3RhdHVzXzQ0NzNf/Ml84ZGU4YjNlNmU4/NmY3ZTNiNGU1YzU5/MjVhNjY4ZGRjNS5q/cGVn" },
  { id:73, name: "Corydora eques", price: 25.00, category: "CASCUDO/CORYDORA", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/ZGFqpwMmS1fX3Q60DgT19lIkJDAmL5gBaBKUHaPkYBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/dGljYXJ0cy5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvSG9yc2Vt/YW5zLUNvcnlkb3Jh/cy1TbWFsbC01Lmpw/Zz92PTE2MTkxNjEw/Njkmd2lkdGg9MTA4/MA" },
  { id:74, name: "Corydora elegans", price: 7.50, category: "CASCUDO/CORYDORA", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/6g-aG33DLePuyW0Q21AIISTXL7hk7G9A270e7H4W7TU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pbnZpc2lvbmNp/Yy5jb20vYjMwMDk5/OS9tb250aGx5XzIw/MjJfMTIvTmFwb25l/c2lzLmpwZy5mYjE5/MzUyN2I4MDFhOTNm/NTBiNTg3OGMwYTI0/ZTQxMy5qcGc" },
  { id:75, name: "Paratocinclus haroldoi", price: 22.00, category: "CASCUDO/CORYDORA", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/aUkMSa28dBeP4bY7nDZYUWUZM45ZIumEvSTIfgpNB8E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzY0ODgzNC9j/YXNjdWRvX25hbm9f/cGluZ29fZGVfb3Vy/b19wYXJvdG9jaW5j/bHVzX2hhcm9sZG9p/XzUzOTlfMV84MzU0/NzA5YWI0OGQ4Nzg0/ODE2YTg3N2UwYTI2/MzIxMC5qcGc" },
  { id:76, name: "Corydora aeneus véu", price: 15.00, category: "CASCUDO/CORYDORA", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/b9DSuMW-RRFYuesoPSI_slG3J7wyNEFerlHCx2CENqk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/cmkucHJvL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA5L2Nv/cnlkb3JhLWJyb25j/ZS1hbGV0YS1sYXJn/YS0wMS5qcGc" },
  { id:77, name: "Cascudo ancistrus", price: 15.00, category: "CASCUDO/CORYDORA", ph: "Ácido Neutro", available: true, image: "https://imgs.search.brave.com/hZ_CegB29ZwuFsTaTZ3cF4DvRSur4_ALUWkpT7PXdYY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXdzbGkuY29tLmJy/LzYwMHg0NTAvMTc2/MC8xNzYwMTM5L3By/b2R1dG8vMjE0NDQ5/OTQwNDQwOGFkMTc3/OC5qcGc" },

  // === JAPONÊS (KOI / KINGUIO) ===
  { id:80, name: "Carpa M", price: 10.00, category: "JAPONES", ph: "Neutro Alcalino", available: true, image: "https://imgs.search.brave.com/Nx0GrI41ezqPXxmyAPs5GwX3fCmlUMxYtmZDOV9xbTk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzc4MDEwMC1NTEI4/OTA3ODY3MjM4NV8w/NzIwMjUtVi53ZWJw" },
  { id:81, name: "Cometa kohaku P", price: 10.00, category: "JAPONES", ph: "Neutro", available: true, image: "https://imgs.search.brave.com/RESQ5lhjJo5NLebQU5PmjgVcQkb7PC6nRX5PsN2TUOY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk4/MDUxMzYxL3Bob3Rv/L3JlZC1hbmQtd2hp/dGUta29pLWZlZWRp/bmctZnJlbnp5Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1B/MjNJVHpKcFFJNzhE/TjNvTjhkZkFUZzlJ/QUM2YkZKYTJzREJ5/UThzeUVRPQ" },
  { id:82, name: "Kinguio calico P", price: 10.00, category: "JAPONES", ph: "Neutro", available: true, image: "https://imgs.search.brave.com/-3XpNnzZ2yj3fvDVHpG-xbyIX6fktINTu41w_K9HTck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/OTc3NDgtTUxCNTI5/NzI2OTMwNTRfMTIy/MDIyLU8ud2VicA" },
  { id:83, name: "Pérola chá", price: 10.00, category: "JAPONES", ph: "Neutro", available: true, image: "https://imgs.search.brave.com/1eIgcmz2TotPP6FCT8Co8BhwQAKpavAN0jVpVCH5GE0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb25m/aWFuY2EubG9qYTIu/Y29tLmJyL2ltZy8z/MWFmMWZmNWUxOTVk/MGZlZDIyZDEwNWJm/NzFjZjdkNC5qcGc" },

  // === ACARA BANDEIRA / DISCO ===
  { id:90, name: "Bandeira comum P", price: 10.00, category: "ACARA BANDEIRA/DISCO", ph: "Ácido", available: true, image: "https://imgs.search.brave.com/5bOOlXhJiax3bfapSsC1-dQDpjDzao-Oasj34r8fRHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzc2MzU0My1NTEI4/MjIzODcwMjIzMV8w/MjIwMjUtRS53ZWJw" },
  { id:91, name: "Bandeira ouro P", price: 12.00, category: "ACARA BANDEIRA/DISCO", ph: "Ácido", available: true, image: "https://imgs.search.brave.com/13flM8eW_8Wjd9b8MqeVExieHWaznsxWieNRQQ1PD4w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzYxNTc4OS1NTEI4/MjIzOTA2NjUzM18w/MjIwMjUtRS53ZWJw" },
  { id:92, name: "Bandeira dalmata platina P", price: 12.00, category: "ACARA BANDEIRA/DISCO", ph: "Ácido", available: true, image: "https://imgs.search.brave.com/3ivkRh5LhrW27LCtYrXfjxPTG5yQKlpOm7AF1WhRTac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzYxMzI4MC1NTEI5/MDkwMTczODU5NF8w/ODIwMjUtRS53ZWJw" },
  { id:93, name: "Bandeira azul zebra véu M", price: 25.00, category: "ACARA BANDEIRA/DISCO", ph: "Ácido", available: true, image: "https://imgs.search.brave.com/NyH274acZ-G55QjOnkkm-ANeCMUjeP4ebvB0s0RgbEY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXdzbGkuY29tLmJy/LzYwMHg0NTAvMTc2/MC8xNzYwMTM5L3By/b2R1dG8vMjI1NDI5/ODExL3B0ZXJvcGh5/bGx1bXNjYWxhcmV6/ZWJyYWF6dWx2ZXUt/ZDZ5NTlsbnd0di5q/cGc" },
  { id:94, name: "Disco pigeon panda", price: 200.00, category: "ACARA BANDEIRA/DISCO", ph: "Ácido", available: false, image: "https://imgs.search.brave.com/ovIjEfqmL25JNO_yRc5Vme8ZjQP8tC4-X55-6FLbBHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXZl/LnN0YXRpY2ZsaWNr/ci5jb20vMjI4OS8y/MDUzMTMzMzM0X2M2/ZmYzZTIxOWQuanBn" },

  // === POECILÍDEOS ===
  { id:100, name: "Lebiste misto casal", price: 8.00, category: "POECILÍDEOS", ph: "Neutro Alcalino", available: true, image: "https://imgs.search.brave.com/AXEyvW40zMFBsAtS-rbfA-c9KGKye42Xc0GMbf8Gy0g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzgzNzQxOC1NTEI3/MDg3MDIyNTA4NV8w/ODIwMjMtRS53ZWJw" },
  { id:101, name: "Espada domino", price: 4.00, category: "POECILÍDEOS", ph: "Neutro Alcalino", available: true, image: "https://imgs.search.brave.com/0uMnpM6MC-aWrlK-NElNA9tm9ag26a6OkA243nZ5J2Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXdzbGkuY29tLmJy/LzYwMHgxMDAwLzI3/OTUvMjc5NTg2Mi9w/cm9kdXRvLzM1OTA5/NDYyMS9lc3BhZGEt/ZG9taW5vLTM1cmw1/bnJ2cTEud2VicA" },
  { id:102, name: "Espada wagtail", price: 4.00, category: "POECILÍDEOS", ph: "Neutro Alcalino", available: true, image: "https://imgs.search.brave.com/X3Yi17ncSPTlBE6MP9AEv3V0FxA7J-piFNgzHoguBs8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/MzY4NzctTUxVNDQ1/MzcwMjkxMDZfMDEy/MDIxLU8ud2VicA" },
  { id:103, name: "Espada ananas", price: 4.00, category: "POECILÍDEOS", ph: "Neutro Alcalino", available: true, image: "https://imgs.search.brave.com/eBNufEMzOyYBeTUj2MtTo7KhUonh96ZV6pPW9EcUEzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXdzbGkuY29tLmJy/LzMwMHgzMDAvMjc0/OC8yNzQ4Nzg3L3By/b2R1dG8vMzE3Mjk1/OTkzL2Q0M2QxM2Nm/MWEzMzAyZDhlNzk5/NjBjNjM2OTU5NTQ1/LTZsMHp5cWZidHUu/anBn" },
  { id:104, name: "Platy blood glass", price: 12.00, category: "POECILÍDEOS", ph: "Neutro Alcalino", available: true, image: "https://imgs.search.brave.com/HGt_kB8gsHSiP7sslVBntsqK0XxJsaC12wivLoQTxxc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93aWtp/YW5pbWFscy5ldS9h/cGkvaW1nLzc1ODZl/NzYzNDBkNzc1MDAz/MWM0NzY3ZjlkZDBi/MGNj" },
  { id:105, name: "Platy Red White salt pepper", price: 6.00, category: "POECILÍDEOS", ph: "Neutro Alcalino", available: true, image: "https://imgs.search.brave.com/ienqV37K8ta7AV_syxz7qv0JBgAuzhCi0WfSsZUNhsg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iaXp3/ZWIuZGt0Y2RuLm5l/dC90aHVtYi9ncmFu/ZGUvMTAwLzQyNC83/NTkvcHJvZHVjdHMv/MjkxOTM4ZGYtZGNl/NC00Y2U3LWI4Yzct/ZjgxNThhYmU1N2Jk/LmpwZz92PTE2OTY0/MDg5NzI4Mzc" },

  // === OUTROS / DIVERSOS ===
  { id:110, name: "Synodontus petricola", price: 55.00, category: "OUTROS", available: true, image: "https://imgs.search.brave.com/J7waQjk7HZpHiNPuZltbhzzB8KVnsphR2d_DzOSJkec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmFzY2FwZXJzLmVz/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzA5L1N5bm9kb250/aXMtUGV0cmljb2xh/LW5hc2NhcGVycy1v/bmxpbmUud2VicA" },
  { id:111, name: "Abelhinha", price: 35.00, category: "OUTROS", available: true, image: "https://imgs.search.brave.com/VAF1LAIspRa-DdQKmM1owMxRoHk2BgCq6dc2IApu5QA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/NjQyMjEtTUxCMjA3/MzM5MTI0NjFfMDUy/MDE2LU8ud2VicA" },
  { id:112, name: "Mini arraia", price: 95.00, category: "OUTROS", available: true, image: "https://imgs.search.brave.com/Yo4an8nMmb0S2bkoSPUyQ-PJbMsAP03B2RLRVX_gMM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzc0OTgwNC9t/aW5pX2FycmFpYV8y/X2FfNF9jbV9ib3Rp/YV9ib3JuZW9fc3Vj/a2VyXzEwNjVfMV84/ZmVlMmI4MTYwNzgx/NjA3ZjhkZWE3YzJh/YzkwMTEzMy5qcGc" },
  { id:113, name: "Cobra kuhli", price: 25.00, category: "OUTROS", available: true, image: "https://imgs.search.brave.com/uEs_TfTq0aC80kGaOF5PB5Lysgl7RondA6BB4CRw87k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXNmZXJhbmltYWwu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE2LzEwL2t1aGxp/X2xvYWNoXzEzMTEw/M2EzX3cwNjQwLTMw/MHgyNjMuanBn" },
  { id:114, name: "Tatia intermedia", price: 30.00, category: "OUTROS", available: true, image: "https://imgs.search.brave.com/l4W49MXGs8rzLfucQtXAD5AOiGOUV0rN_vosFuGZWdE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJhemVyLmpwL3dw/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzAxL2VmOTJmYWRm/ZTUyM2ZkNTYyYWFk/ZTExOGRiNjk4YzEy/LmpwZw" },

  // === CRUSTÁCEOS / MOLUSCOS ===
  { id:120, name: "Ostra de água doce", price: 10.00, category: "CRUSTÁCEOS/MOLUSCO", available: true, image: "" },
  { id:121, name: "Caridina black crystal", price: 55.00, category: "CRUSTÁCEOS/MOLUSCO", available: true, image: "https://imgs.search.brave.com/zyI3_YyItcKoWIcldlN4QFtSgVilqH3Z-qrpa4oJFDI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb2Nh/di5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTMvMTIvY2Fy/aWRpbmFfY3J5c3Rh/bF9ibGFjazAxMS5q/cGc" },
  { id:122, name: "Neocaridina Red sakura", price: 12.00, category: "CRUSTÁCEOS/MOLUSCO", available: true, image: "https://imgs.search.brave.com/RYj3xcQCEEJRqsMZ_Is5gNEK_AS_GZ6koojVC4K5MD4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYXJu/ZWxlbnR2LXNob3Au/ZGUvY2RuL3Nob3Av/cHJvZHVjdHMvcmVk/LXNha3VyYS1nYXJu/ZWxlLW5lb2Nhcmlk/aW5hLWRhdmlkaS1y/ZWQtc2FrdXJhLWRu/ei01MjAxMTNfMTIw/MHguanBnP3Y9MTc1/MzI3OTAzOQ" },
  { id:123, name: "Neocaridina Blue Dream", price: 12.00, category: "CRUSTÁCEOS/MOLUSCO", available: true, image: "https://imgs.search.brave.com/XWqLoFVI2rwEUJG-r_VtfE6ahQSUr8OU7dKxZPsCGf4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2hyaW1waWZ5LmV1/L2Nkbi9zaG9wL2Zp/bGVzL0ZvdG8xOC4w/Mi4yM18wOTU0NDQu/anBnP3Y9MTY5MzY0/MzE4NiZ3aWR0aD0x/NDQ1" },
  { id:124, name: "Ampularia amarela", price: 1.50, category: "CRUSTÁCEOS/MOLUSCO", available: true, image: "https://imgs.search.brave.com/Y6S-XyTf8MY7fLF9pqkbZCLjj_M6PbF6P4iR430PCkA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/c3R1Y2hpLmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wNi9jdXJiaWN1/bGFfcG9tYWNlYV9i/cmlkZ2VzaWlfODkz/XzFfMjAyMDEyMTEw/MDEzMzMuanBn" },
  { id:125, name: "Lagosta filtradora", price: 40.00, category: "CRUSTÁCEOS/MOLUSCO", available: true, image: "https://imgs.search.brave.com/aTvTi4QGPvWb-IcF5E2q5KrXHbqcg8SbPHzbC8WgGik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXdzbGkuY29tLmJy/LzYwMHgxMDAwLzI3/OTUvMjc5NTg2Mi9w/cm9kdXRvLzM2OTU4/NzM2NS9sYWdvc3Rh/LWZpbHRyYWRvcmEt/eDFuN3R5Z2Ruei53/ZWJw" },

  // === PLANTAS ===
  { id:130, name: "Elodea", price: 10.00, category: "PLANTAS", available: true, image: "https://imgs.search.brave.com/F7rn3hOA7pAtKZZUUp6A7kV_51fLjksUR_r4r2BM3oM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy1z/YS1lYXN0LTEuYW1h/em9uYXdzLmNvbS9s/b2phMi82YTE4MTZh/M2VkMjQyZjA3MzVh/Y2M5NWYyMzUzMTdl/Zi5qcGc" },
  { id:131, name: "Valisneria", price: 10.00, category: "PLANTAS", available: true, image: "https://imgs.search.brave.com/f7larGprkAUQPTuUj0FnYXuePKOhzoQaFgYg3WL0uuk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hemdh/cmRlbnMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA2/L1ZhbGxpc25lcmlh/LUl0YWxpYW4tQXF1/YXJpdW0tUGxhbnRz/LTQ3NXg0NzUuanBn" },
  { id:132, name: "Echinodorus marble Queen", price: 20.00, category: "PLANTAS", available: true, image: "https://imgs.search.brave.com/MWuUY4XXjIY4Z74W2CCcEJdcr0lxTTIZ6-80BM2eYnI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVh/NmI5MjIyZDdiZGNl/NmM5ZGFiNDU0MS8x/NTI1ODg1OTg2MjA3/LVVIQU9FR1NONjFL/RjNGUEpQTU5YL0Vj/aGlub2RvcnVzX2Nv/cmRpZm9saXVzX21h/cmJsZV9xdWVlbi5q/cGc" },
  { id:133, name: "Microsorum pteropus", price: 20.00, category: "PLANTAS", available: true, image: "https://imgs.search.brave.com/RCnZNWsYEY95wDF1RcxwDm5t75hgwOAWA4brxJOLzc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzY0ODgzNC9t/aWNyb3NvcnVtX3B0/ZXJvcHVzX2luX3Zp/dHJvX2FxdWFwbGFu/dGVfODY3MF8xXzVk/ZGNkY2E1NjBmN2Fj/ZDljZTdmNWYzMzg1/MDhiOTBiLmpwZw" },
  { id:134, name: "Echinodorus maior (martii)", price: 20.00, category: "PLANTAS", available: true, image: "https://imgs.search.brave.com/mmGkUdw95MAELU_nkav36ue2Ct0VQBnDI1Q8LG_f5sI/rs:fit:860:0:0:0/g:ce/aHR0cDovL2FjdWFy/aW9yZWRmaXNoLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8xMi9FY2hpbm9k/b3J1cy1NYWpvci1N/YXJ0aWkuanBn" },
  { id:135, name: "Amazonense", price: 15.00, category: "PLANTAS", available: true, image: "https://imgs.search.brave.com/LB5GtloeIX_80kQ01he_3a6MNDZWYjK4uzsv67Agwl4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kY2Ru/LXVzLm1pdGllbmRh/bnViZS5jb20vc3Rv/cmVzLzk0Mi81OTQv/cHJvZHVjdHMvODYw/MjI4OTA1Mi1wbGFu/dGEtbmF0dXJhbC1h/bWF6b25lbnNlLXZl/cmRhZGVpcmEtMzQz/ZGY2ZGQ3NTkwNjE1/MWUzMTU5MzE5NzE2/MzkzNjEtNDgwLTAu/anBn" },
  { id:136, name: "Musgo de jawa (por g)", price: 2.00, category: "PLANTAS", available: true, image: "https://imgs.search.brave.com/XyAt7ezVXe6_pMw47B71R-hAH4sHe3T5GgIsNIV962c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk5NjAxNy1NTEI5/MDM1NjQ0NjU1M18w/ODIwMjUtRS53ZWJw" },
  { id:137, name: "Anubia lanceolata", price: 25.00, category: "PLANTAS", available: true, image: "https://imgs.search.brave.com/u6WyX3SbyX28RFQW8Wy_rBWo4cxA7M1_iTvL6B6hA1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy1z/YS1lYXN0LTEuYW1h/em9uYXdzLmNvbS9s/b2phMi83ODhlOTM5/ZWMwNjg3MjlhMWQy/YjcwYzQ5OWFkM2Y0/Zi5qcGc" },

  // === PEIXES MARINHO ===
  { id:140, name: "Ocellaris", price: 40.00, category: "PEIXES MARINHO", available: true, image: "https://imgs.search.brave.com/C8Yk1KWx-oJIr5SInAOfHa9Ygz6dI7p88iL2dWVr-Ug/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXdzbGkuY29tLmJy/LzYwMHgxMDAwLzE4/NDUvMTg0NTcxNS9w/cm9kdXRvLzIyMzE5/Mzc5MS9pbWdfNTgz/Ny1qamttZ2hka3R4/LmpwZWc" },
  { id:141, name: "Ocellaris maroon golden", price: 90.00, category: "PEIXES MARINHO", available: true, image: "https://imgs.search.brave.com/uUXxn1Q7oLziGN6bG5XT4a_yBwUy4G2kNE6gWLwgws4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlcGV0c3RlcC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDYvWWVsbG93/LVN0cmlwZS1NYXJv/b24tQ2xvd25maXNo/LTMwMHgyNTcuanBn" },
  { id:142, name: "Donzela springeri", price: 180.00, category: "PEIXES MARINHO", available: true, image: "https://imgs.search.brave.com/JvIruGreiv2Ws1JqsM1aADY597ZRd-E50yHN4BjqBwU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXdzbGkuY29tLmJy/LzYwMHg0NTAvMTc2/MC8xNzYwMTM5L3By/b2R1dG8vMjI0MzMw/MTQxOWRmYTcxNWU3/Yy5qcGc" },

  // === EXTRA L (Adicionais) ===
  { id:150, name: "Flying fox True", price: 20.00, category: "CASCUDO/CORYDORA", available: true, image: "https://imgs.search.brave.com/H6h9ACzRf7-LrvMvZ9tZlJxBTfZSFD3kdEQWjuwdWwc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/ZGljdGlvbi53b3Js/ZC9pbWcvcHJvZmls/ZS80MzItdHJ1ZS1m/bHlpbmctZm94LTUu/d2VicA" },
  { id:151, name: "Cascudo banjo", price: 20.00, category: "CASCUDO/CORYDORA", available: true, image: "https://imgs.search.brave.com/U7YvOc_4cwh1S5uwD2dq3mHpIzkWHRADpx_oBgsynBM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzc0OTgwNC9j/YXNjdWRvX2Jhbmpv/X2J1bm9jZXBoYWx1/c19jb3JhY29pZGV1/c18xMDE1XzJfZjJh/ZGU5NjU4MGEzYjc2/YWY3ZjI3NmRhMTdj/YzYxYWQuanBn" },
  { id:152, name: "Cascudo leopardo vela albino", price: 55.00, category: "CASCUDO/CORYDORA", available: true, image: "https://imgs.search.brave.com/O4Dlfa47zRjwfdCafrtaEU3DNwRFB9G7UCyoDQqodBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y0LzVl/L2Q3L2Y0NWVkNzg0/ZTQ3MDlhYzc0NDNl/MDI2OGYxODY5Njk4/LmpwZw" },
  { id:153, name: "Cascudo amarelinho L81", price: 80.00, category: "CASCUDO/CORYDORA", available: true, image: "https://imgs.search.brave.com/cEMAybN8Ka2O0m-31QTkKLbYxbKhJ8ibOPqh-43HoJg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzEwMjg0OC9j/YXNjdWRvX3BlcGl0/YV9kZV9vdXJvXzVf/YV82X2NtX2wwMThf/MTA2ODRfMV8yMDIw/MDEzMDEyMTY1NC5q/cGc" },
  { id:154, name: "Cascudo emarginata L011", price: 90.00, category: "CASCUDO/CORYDORA", available: true, image: "https://imgs.search.brave.com/hfnCbr8tP6eabR_U0ax4j_qc51_KCD-yREGvI1VzFV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXF1YXJpdW1nbGFz/ZXIuZGUvd3AtY29u/dGVudC91cGxvYWRz/LzI2NDgwLWwwMTEt/NC1zcXVhbGlmb3Jt/YS1jZi1lbWFyZ2lu/YXRhLWwxMS1iaWxk/Ny5qcGc" },
  { id:155, name: "Cascudo genibarbis L095", price: 60.00, category: "CASCUDO/CORYDORA", available: true, image: "https://imgs.search.brave.com/74QSY2i9HWTqPbZpEhGlceeEc8eIa3Cr_4u7izKt_vY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGVldmlzLm5sL2Nk/bi9zaG9wL3Byb2R1/Y3RzL2wwOTVfMTIw/MHguanBnP3Y9MTY4/MjM2NjAxOQ" },
  { id:156, name: "Cascudo tigre bola L75", price: 50.00, category: "CASCUDO/CORYDORA", available: true, image: "https://imgs.search.brave.com/RrXm6qXjprjW1XMkcwFNvCj9nQWXpjsAZ-VL3n2hQJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzc0OTgwNC9j/YXNjdWRvX3RpZ3Jl/X2wwMTVfOTdfMl9l/YzBkN2ZkNTZkY2Zl/MTA4ZTY3MmU3ODI0/YjVkZWY4ZS5qcGc" },
  { id:157, name: "Cascudo zebra king l066", price: 70.00, category: "CASCUDO/CORYDORA", available: true, image: "https://imgs.search.brave.com/pOX3FrqMyYzfEC6cd7zy_shPOx_yfs4SkeMzAY7v_RU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b19hdXRvLHFfbG9z/c2xlc3MscmV0X2lt/Zyx3Xzc1MCxoXzU2/My9odHRwczovL2Js/b2dkb3Blc2NhZG9y/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMi9jYXNj/dWRvLXplYnJhLTEu/anBn" }
];

// FIM DO ARRAY — TUDO PRONTO PARA USAR IMAGENS

let cart = [];

// Categorias na ordem do catálogo
const categoriesOrder = [
  "BETTA E ANABANTÍDEOS",
  "CICLÍDEOS ANÕES",
  "JUMBO",
  "PEIXES PEQUENOS",
  "TETRAS",
  "CASCUDO/CORYDORA",
  "JAPONES",
  "ACARA BANDEIRA/DISCO",
  "POECILÍDEOS",
  "OUTROS",
  "CRUSTÁCEOS/MOLUSCO",
  "PLANTAS",
  "PEIXES MARINHO"
];

// Renderiza botões
function renderCategoryButtons() {
  const container = document.getElementById('category-filter');
  container.innerHTML = '';

  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.textContent = 'Todos';
  allBtn.dataset.category = 'all';
  container.appendChild(allBtn);

  allBtn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    allBtn.classList.add('active');
    loadProducts('all');
  });

  categoriesOrder.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = cat;
    btn.dataset.category = cat;

    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      loadProducts(cat);
    });

    container.appendChild(btn);
  });
}

// Renderiza produtos
function loadProducts(category = 'all') {
  const container = document.getElementById('products-container');
  container.innerHTML = '';

  const filtered = category === 'all' ? products : products.filter(p => p.category === category);

  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product-item';

    div.innerHTML = `
      <img class="product-thumb" src="${p.image || 'https://via.placeholder.com/150?text=Sem+Imagem'}">
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>R$ ${p.price.toFixed(2)}</p>
        <p style="font-size:0.82rem;color:#666">pH: ${p.ph || "—"}</p>
      </div>
      <div class="product-actions">
        <button class="add-to-cart" data-id="${p.id}">Adicionar</button>
        ${p.available === false ? '<span class="indisp">INDISPONÍVEL</span>' : ""}
      </div>
    `;

    container.appendChild(div);
  });

  document.querySelectorAll('.add-to-cart').forEach(btn => btn.addEventListener('click', addToCart));
}

// Carrinho
function addToCart(evt) {
  const id = parseInt(evt.target.dataset.id);
  const p = products.find(x => x.id === id);
  if (!p) return;

  if (!p.available) {
    alert("Produto indisponível");
    return;
  }

  cart.push(p);
  updateCartCount();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

function renderCart() {
  const container = document.getElementById('cart-items');
  container.innerHTML = '';

  if (!cart.length) {
    container.innerHTML = '<li>Carrinho vazio.</li>';
    document.getElementById('cart-total').textContent = 'R$ 0,00';
    return;
  }

  let total = 0;

  cart.forEach((item, idx) => {
    total += item.price;
    const li = document.createElement('li');

    li.innerHTML = `
      <span>${item.name} - R$ ${item.price.toFixed(2)}</span>
      <button class="remove-btn" onclick="removeFromCart(${idx})">Remover</button>
    `;

    container.appendChild(li);
  });

  document.getElementById('cart-total').textContent = `R$ ${total.toFixed(2)}`;
}

// Modal carrinho
document.querySelector('.cart-icon').addEventListener('click', () => {
  renderCart();
  document.getElementById('cart-modal').classList.remove('hidden');
});

document.getElementById('close-cart').addEventListener('click', () => {
  document.getElementById('cart-modal').classList.add('hidden');
});

// Relógio
function updateTime() {
  const now = new Date();
  document.getElementById('current-time').textContent =
    `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
}

renderCategoryButtons();
loadProducts();
updateTime();
setInterval(updateTime, 60000);
