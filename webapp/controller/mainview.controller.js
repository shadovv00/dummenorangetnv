sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangetnv.controller.mainview", {

		onInit: function() {

			var Grower = {
				Role: "Grower",
				id: 1
			};

			var GrowerAdvisor = {
				Role: "GrowerAdvisor",
				id: 2
			};

			var oData = {
				Growers: [{
					id: 1,
					name: "Van Os Chrysanten C.V.",
					address: {
						street: "Harenwert 48",
						city: "1000 AA Maasland"
					},
					phoneNumber: "06 12345678",
					imgUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBw6a0R6fKc8umKDbHp1z9JNAHJUqFg3qKezYDe6_jdwTBq3WE",
					bays: [{
						id: 1,
						name: "Van Os Chrysanten C.V.",
						address: {
							street: "Harenwert 48",
							city: "1000 AA Maasland"
						},
						phoneNumber: "06 12345678",
						imgUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSpHTIt_OPN3bmVj_EYuqr_yiTREgieD_B8YrOjZoCRbluO34-sZA"
					}, {
						id: 2,
						name: "Van Os Chrysanten C.V.",
						address: {
							street: "Harenwert 48",
							city: "1000 AA Maasland"
						},
						phoneNumber: "06 12345678",
						imgUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFhUWGBsbFxgYGB0eHxofHhoaIhofGh4YHyggHxolHRogITEhJykrMC4uGiAzODMuNygtLisBCgoKDg0OGxAQGzUmICU1Li0xMjUuLS0rKy0vKy0tNjUrLy0tLS0vLS0vLS0tLS8vLy8vLy0tLS0tLS0tLy0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQADBgIBBwj/xABGEAACAQIEBAQDBQYEAwcFAQABAhEDIQAEEjEFIkFRE2FxgQYykSNCobHwFFJicsHRM4Ky4RWi8QdTc5KzwtIkNENjgyX/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QAMxEAAgEDAgQEBAYBBQAAAAAAAQIAAxEhEjEEE0FRInGR8GGBwdEFMjNCobHxFCNyguH/2gAMAwEAAhEDEQA/AH/CzzESRqUj6xjTrmG31N/5j/fGV4a8VF9x+BxoQfPCCcwROs7Xa3M3XqexwSmaaB9o/wD5j/fAWZNh5Efnj2geUegxRaXC8xmXj523HU/vDEfOVNPznp/TA9Y8p+uPa3yn0P5YmqSHpm6hBBc4W8PzDfs4WbBtv83++ClbC7In7Nx2f/44moyRrkM8+mA1hHbsPLHq1a3iaxUMERB29htPngbJ7H1/oMFLiajLE9GZf94/P/7CcW0GZnYM0/Z9QO+B6aEtb98f6MG0EiqZEfZt+YxYMlpeqjwgSP3Jn1Wcc8EQfaiNqrfkMWrT+xUG86N/VfwxXwbev/4zfkMOg2llEX96n/qYtelI9/yxXlvm96v+sYNbY4klotX5ah7f/BcVUFmip/gX/TgmkOSr+v8A8a44ya//AEwP/wCof6cSS0LFMGbYX1qcVUH8L/mn98NlGAK6zWX+R/8AVTxRl2in4lMUaixutMz/AJxhdwniVPL5VqtUMUVr6YJ7bH1w1+Kh9jV/kpf+ocY/4gaOEVvN1H/PS/vgScyoxX44yjDWKjFVAdl03AFjY2mWFvpOL6Px9kqpCp402N0HQgd95Ix8YyQbw8wYMeGBI2nxqP4xgj4ZQivBEf4Yv0mvSF/Mg4ANBuZ+gVXmpRrHKxIEX+UX+uFIJbO2JA8MwT05TP8AU4bJqBQAv8h+6LfLty3wkoZpVzrl2tpIlrX1RB29MWbQzGGY4hURigI5bbemF68SfxajQpMIDI9cWZy9Rj5n88BUEl6pHTT+AwN5cKpcVc1C0ITpUERbdj3xXT4gxCcqWUxb95lJ672/E4GpbufT8scLaPJU/M/2xeoyrRjk+MsCeVdgevX3xaeNmD9mD/mOFOXW3sBjsi0frfE1SRt/x8/91/zn+2JhWPfExeoy7RHkxzr6jGoWiex+mMjTYgjyviv9qcMZqVFKxIkyB08wD/bvhFaoEIgFrTX8QTShmx6TabjacVUs3S0/4iWn7w7x3xnEok0/ELDdfmI1Ht5nr/bA9MozMCQAAzyZOwkGBPrt0wj/AFIIuJfjva01dXPUipHiLJBi/ljx+J0YPPfY2axjY2jGWy1BnYqqEmJEDYX7x26Y6ckg8kNYliOU7TcwPL1m+K57HAlXa15qzxSkoE6riRA3Exb3BHscUZMtpqShCtLh2sOkDzJ8sZ/MZhl5WsLcpnlvNjtEmd+mL04gZtzDTGxMssRpEWjYA2jFDiGteTV3j4cWSlYqSWhgAdg1wDbeL48PxDpWWpENqgKSfOZOm14/HtjPtm3ACrKtJBaAOUsPIxD7xMREY4r50VW1k3doqkATAmTe1x1jsPPA8+pe0hNusct8RPM6EW4YAm9gB0N8TOfFdYAVAqlrIAB+9E2Y9CJntOFGXzVNn1DVoVbjSDJCq3Le9yQB/EMJa2fqQhUEXgnytHl2+p26EtV5RuJpx8UVagUeJCBVMKNJIvEyNQuMV/t9VD4gqOpgljqgGe8xe/5Yy9HOM2kICJiGAAsDffp023J88W5hy4YOSW0CFnlWCSxYdSTp/wDLiuY53Mi6Sc7TYNxbM2KuZhjZR1u3Ty9sW0eO50MBOoERdRHqSAL++MvSzn2jrrI5SYU6oj5iJsLvfYgHyt5W4rUYjSrAKBzAyJ8wttJtB88Aale+8Oy75muTjOZlklBHz29vpAG3njl+K5hAabVUVACBYRAJWJAnV+O3fGZr8XBZNDNF7DYEG5JYm/a3S+CW4mjpoqEs19UH+2x8r+QtgDXr4z7tGBFOAftNJnPiJnplLXi8Msi+5BETEdN/KcC0eP1fE5BSBUEKq7MDE/ymQDv1G84U5jiOmC06IU3XYx22Y+pmQbmcB1+IqpEACwFwLixldPQ6oj0xBxNW2SbwtCjJMe53jdWrTcVIhiosLiDNyLHqMV0eKKtEUWRG1kkBwCDtYgwLaZmbm1sLzqKaySQxgGwmJ6A2v+WOAqsQGTVpE9fI9NhNj5E+eNAqVDTuTm8GyhsSmtxCkdPh06SsTNRQq8q6fIdwDJtf0xzks6hfmopIazaQflAKnpIBVY81GBv2Ji/KCSLhbmQNywjp679cUjIkhiGMAXI/hi246wJ64VrNriKZzNDmOO1ahhazoFYBWbsAsGEWdWqSYtHocAV8u7j5ijFgZ33v1jvM4X5rNEBAkKTtB+blRbjpzEnfr0wwoNU0AWVrFpMfLfc9yBt3xetzfPT6iWoUtnMvyNarEM86nktfy5u4kk2Pkb4Y0c1qLaDAa9wbjTtPToZwkq1R4YVjo8QiL2uSZUm2m5M7EXwHxHiSoyrMLA9TNhBNxFjJ99sAjVLEX7Rh0KLxxxCs1OS4YC/WCCIkET1UjAD/ABBEBWJBIFxzbH+5Pa2KKx+0WlmPFuYlRGmHIJYbHlDCN9o8w2y6kGJGkgmBJCxMT36E3H44ZqIyJnZiY2fjrLpPcNIi3kY3E/2OC+EcRarUCC87H03HrcYRuVqLpFM6/DJJaBAUmO1+87x32M4Jk6lOuupGLFQy6SAQDsxBO1yYsT264JahveRSxItNJVLKxVmCkHYsAR7HHmFtEZgqCoaPOlPqZO87/lbExDxXl6zVpXuffygwbb0wLxCszMgKhnk6mUQWWCbzvtv5AYupNyqfLCqvl2apNVtV2gXAKhrA6bEep6HDeKCeFmmZmIFozo8TQVVLK4s2lTddXltpsQdr3xRxfinh1Kaqw8LSNmltMiQ0QZgR7n0wJR4XzcwcGV8NlYhlsIKkX1fSwPsvpcFq1ToWUi4qGTYbTpBNxb+vU5WVStztvtICzYG80GU+IkVqhjVcEvC3AmLAD7zAeg8hgtOMp4ZbwuZjpBghtMEMVJ+996xke9sxw7LgVSjypuD1BEEHSe/X6HDnw6KEIsNpJlyLGwixMAiIkdSfTCQoUn42hcxtOfZMszubDRzBjpcaIJvNiIIm5k+mBMwaqAkRTsCNMkgaYE2ksxvcWB+jShkqb6gvzLLLp+6GiZkbkD/l+q0nmVCeYLLExcj5vLeI8jgyu5Pu0HI3lOYzDfs5DoU1uG1MCA+5GmFAiGAMH7tt8GcPeaQ235WtEH7sdLnY9cV1ivhharM6qvICYtAAAi5iSY7zizMZTTS1kQ0mAsRBkDreJsOkmcVSYMAR9ff+IWtc+Vp7WRg0eIxa+me24iRFjb6eyarr1aROlT9oAI1SGt59ZNhIxavEaiOGciQQpBAjvP67YKzWcpmTp3FmBiTF/La0x1w1WsTFLUtKqvDWq0qSq2iN99JURvBmR1HocRMuVVtDamIYMNySI367TF+vlfxOL03CmmADp0lDHK0QCCYkkG7deuPMqQQ7ISCDc9zvIPe0fTBknaQ1TLOIZNaZJVSrOWaIjRq3jv2jpBxZlakuBAAAIK7TEm/6+903NWezkpRRomG2MzYbgeYP4xbC/OZxTmNCowEARJJ+WWMwIkm9t8Z+Zck/P5Si0YrUVKb+H99iSfaAP+WY774toZ1CxaIYCJtMc2kbQL98KMyzAlNSlCQesnpuDbqdz164IyvhVFakWhrQFJJMTHpA/Rw5WzpEmq5jDLZyT4dQDrrkxtEbeQIme3a/PGM+BTKFRq1KwMdYuLC6kE22mDjzOZABDpJ0L/iNrhvSw9LdJjpinM8LKUkQyxm1wWAPUmPaDextOJpxYw7McwnhWcU6adwypcTYGRB3309fM4NbihVvCE3C9994EHbz9cZ7hy+C5YkuSCdo3IH4m/6vTxZ2OYfSBJVCAYOyIdiMMIIp47y7m01PCOIN42pKcqisIBkc0gajHU9Iv5jF9RnoqaagU1qsXqwFUHlA5oAsRHLFjOMXQrMkfbAOL2uR5SNpi8DDD9vZ3BZuZiBN9htEbnzMjywlbgbyhNA2UWdYJgjlfUFA7HcTckgDywHmuIimqRMObW5tIGwmANxvtAwCA1XWUDOxgamFk3BDaoUnpIUxfuMP8lw8AKzqGKzpJPeJ9B5n6YaNjb3mOWkb5mcqZx67ctEXAACgGANjzA8xHW3TbDo8BTxNdWCdIAB8o9yZA6YLGZCiUAUAxOnpG3Q7bWAxUK25dlhgLXBYsLX1E74JRYWMaKYEt8NReQZixEx7gHSO8e84pyrxeCNL/MN4BgCLRe/fbbHj19hHyptqtIvpiBOw9ZGPDW3kmLdBEWO8x1npv7YlryBVOwldKjIEMAWnVqvA36SD194wVwXLtUcO10RQFgybDY9xER7bYE1qCNUz5RNo31dz+fbZt8OZfxVOtmUzt5dBK21Drt6YB7CDTUahM9mOIFWYLUciTHOR7R5bYmDMz4iuwRiqhiANJbqb6vEG++wiY6YmEEsP2+/STlKc6vfrKMoZQY4zrgyqhi4+6ATO5MD+gF79se8OPJgLitanQ8XMOxD6FCDTIJJIN5gEWvB3646FYArn30iCpbAjmvRYU2q0zB0DQjEyZjSDsQxEnSb2wJqBYMrsIGreXDHTJg7re/8ALFpGFNbPu9OALq5PnuPrAH4eWOW4qaU0jrRWAMqFYEW3nbsVuCG84xkZFJ284oMRkRslOjzM9VzMWUAHZZ3k262AEgX3xwXTXqp86h7dhPylh1U2FvLADZ2mwi3WSvY7372B9umOKGcpk1FempUERBKKveQpB7R6nCgviv8A4EJqgItb594xzlKogWWUVakXWoSyAC8qLCe9wQCOmJUzxBI0g+IoIDX2m++8GJ88C+DWCEstQyABKsI7XMg/jEnC2tmwSLnVTOn27X23wbCykjrAdybA9IRnqwOnRBI+a919R7m+HeUzEDUzIxRZJMEGBax3v+OMjmsudXi0pYyrARMMO0dNrHD7I5eo6aa2mmxJ06BdTuRI3sTIJODpIALiUB1krIa0OgAgksDMGwna95MHp3FsUZ6iGpa17Lo1XKjrP+nbr0wHmMvVqMadWqBRVRrCIAzhSeXliF6kk+xxxm6pOjwxCgtC9AtgO+wX2g3xOWu67yTrhlKnTXxKjArMkR3P52G39iG2QypY+KnLSJPXcEyIHthM/EqMMGWTEaZjVchjMG4iYjbrh1l66xT8PUFMwsATBgaRsVEG+LALDIkg3EslUqlX1AKBCrFli0TsTFyZnfEyuXBDh6iqLaWIM1AZ+QfSx3kbY5zXE2aoyKsqi/LaT1O/Un0n3wbkeE0UAr53SBErlrfjtHoG99xgSisdtpYi5eDBoFPN0wQDpVzLNBMxFgLdJ7b4TMzKSOU2uVIIaOsjfafPfGl4jnRVWnTy1GlRotOoiNTgyGQkRb69DbCHI1Kav9oshAAVDG9rAFAZ3Jjz3wyw6QtIMeUuJstMKtEOYACk7WBBMAQZOxNrRc45pZxwy60GuGhQf4T1EbeWxPe2FPEftlRgsK0hgCCAZJE/eJI2JtbB+XgIBJeGUBrgKbRHcQLm3n1xGEIA9Z1kKXiVSxCaSrQPvASum3kN/MjHHGq51MmoaRo6bkIsbCTufrt1wZktKuqqG06ahBZQpPOnQSYggC/Q4KzHBfEdnY22noOUD3P4Yj35Yv3mgU7nTEgz9Qp4YjSb/KO4sLA9fxwfwPhis7M24jRIPMSCDHUiTEyNhOD8lwymKhKyTF2Pyx5AemHCUzAIkATzdfYmwwveNWkqnMvyWXCAByCyr1MDtIje/SPri6vkgF5nXmg3K8sRqkTcgHYfTrgA5qmYC8xtIa4Yk2BUi+4+h6Y4y9UA6iEJYMNNyQSI1Ag7QIjy8hgPH+3A/uQvfIhGayyMSoRgS/8AEBsNXiAA3H8JFjvbEXIotQ06qBmbSafh3iTER6X/AMvtiuhUrapViSBqc9VYLBM3A3M23nvj3h9YgglwdT6nJPMwB0gTa2pTEWECO+AFNxi/85i9V5znKFPxiiJVBCzHLEmYEmwBLLJnr5YpanUVxTVSKh6FO3UX/e2PSLYmQpFyz1FBd+aBI6XgCTaQo7WAnDbKZljVqVmA0JIBMggWMBR94i8iDJ6C+LZ6lMDriWCdolrIFBWoDN4AMTCzexiSB5G98aXhGSpMinUB5GMZrNBa1UaCHV5cliJ5jEHrI0/q+NNk8sigXYH0/wB8MJ1ZMbTN722i7PcAypqMQg39PWwx5iZ7Lg1GgPv+4x/KRiYmo94JQdpm+HmxGPOJInzVArKqk6WEqdon3j9b+ZHcjFnEVGjYbjcwI6z5f2xuqmyEzG20zWfqqulxpYH5Ab3Ag6t19xBt3tgs5q4VlUhUGpS0HabAmd4HWST2w2qZHxCjLzFBGlTMhT+71YCRt0tfA/EqR5QAUWm0/KtyZktt1iDHveAkjF5KYTUNe3XykyORWqCaKlXWZQ32mRO0/wC+8YCp5nw6gqBboSYB3IPkR1HpHfHpy/KHDyzSxJMaRAAEX639T5YCYcxggAg7yJH8u8TBthebyqjA7C00mV+K8zU1F0inaGYNzEi5g/dEiwnrfpgLOClWB5GFSJOi6zFjsC0T8pMXwPkmQowSogRhHNY80StzJPn1wyq5UUqEpAkCVm7HuxsAoPQSfphmTeNqUbU1fvM/w6q1N7MrggBgNyR5dO9zjipnyG1amDAQTqnbaFII64My+QIKs6kqwYuVQjWRaVapfRcXBiSbQRpSVFrVKiolJkuApp+ZgGXMnzOoDfAabnESaTAA94bQrmozqXKvvpN9XqdtjMY5RrqkgHYifO89sEZ7gi5amageXDgMXiAOsabliYEm354Q/taq4gmbmTBDX2iReTsdQMYvlA4Et6JQ6TD6fCalJh4q7sdJWXGwkmbgDuY64MXj9WhSFNWG1juQOoHbtaesRirLVMwbH/DqbIUHMLbKBYEbMI69sBcT4G9MKqILTLG5vFjaP164MHOZVpeOMOCBTIQg6i4N9o+b5vUz2xdncw7/AGlRy4AH3mkGeWJ76vPb6B5fJKpQuzAmIAWY2t1MX/W+DsjSKhw1PWgUizaTczJBBJIG3pvhRWxFjK0yyvlfEVTSqqNNyrGCNoBO0g3F8VZXMAtUWuAUBfnIkrewBB8j5g9se8HTRWEB/DPzNE7m4YXtNjvh3x/gwp1p8VGJWAJsBewMXtF47e5awN45aZIiMZlqDeGw1MG3EjoYPNMmCIMWv5YdZHOuyilooKQdWo00FS/yhQBvadjYiehwtyvw/WIWoSoVAo5iSZG0AA41GUC0uciWtcrzCeqxvtJ29b4Et2mheHNrtieUqMKokFttrnckmZIv0nDBoYcxHKPlJ+lwCDNvTA6VqDK7MdJLMIYkt0IblEC56n6bBdkcvUZrwNgqxaAsC3SBefzwPMB8PaMK6c2OcDt67Ry7lhqZYB2BIi9we3eR2+mFvEc6wplSCJ6KwtH1taIxccnWRaiM0AKzBQ4JsDvHMOUx9MLwWUF30lFAAWQYFpnTzAgXExt9ZzFK7wGBcG2CB8tvXMtQtVZLhdZsDJMggRvA/wB4OC8xT0sJdiFEBVtqF7diJi87z3GK8jrRakMq09lJgwBN+VQQdpPrirP50RpCRo06SRzXiTyyAIva4jbfFgg7bwFGkLYWvvvke+0spVmd2pUtQ1GCQJAUXlrWEgjp+OLOHZwCkyaobUCgMmDadQG53J7ThfkszUTLim8stQkMT1kbetzv085wFRd9egERFwdoJHQHpI288ADm8FmtU8j6j+7TQqS5DIlrKACQDuTFgZkyb9euIFgPTXS4aPk0lTtp0yIJkgbWx5S4MzCnpqAKASxmDcjmj+W0zInFudpLSVVpNo1qecm+/m0LIHXefPBhW053l0sgkjM8yNErUXUIiR0tEGPL5jbyxqsuwt3+uMhk0IYDUSR5i1zPyEzvv1xpaIAWZEdT/fAGOo/lnuZzNMMQVv8Ay4mOKucE8qlh3EkH6Y8wqzR9pi8kYcYL4igNJ7AwpIBnsR0IOxOAcsYceuGeYfSjEgkASQNyB2/tjqsLgics7QE1GCitTRhMailhtvt6nc9e+A+HDxBDuVJMFQCNUQZQsb+fXByUN28WVqAlR88iwIY2vPT29F+czbimBQuAfJtMTOlGESbzy3wkbQJbxKu4cAVOVeViRaJvLCTv1PSL9cJc6iqZRgxmGCKLNeZJvF9wDviutxWo2lHUEqWtoA1KTeFABm3bt5Yt/wCHCoSVeFImDczF5AMAaWjcHa2BvCWwORPcpUpqwhIEwxBBI9JsCL7RgitTrgg3ZGggswAjz1HTF9pwozucdE5AsFolwGbrZVYQEtsZ388aHI06vhF8yg06YTUdp/7vTJXpa28d8QLp3hFnChDtvLeIZ6oiEVGJVrRTYEQu0SOXfoLmL4Fo17LUVWR4OlUjY97apjy64QMTRaqCxeNjPUj8hI9xg/LMtNU0Fi8czEkj+FV7YA7m3WW7AovfMYcVFTMUhQB+0LLJawA3APdiQPaPbP8AF+CNRIDFX5wCViAQb3JB1biADjUcPpyj1XbSOhO8n0BuYA8sLM7UDorat2IE7DTAYibwYt1I6YtSVAEpQWBivO/EDnlQlCsCRIOnoAf3fL69MW8O+I6lLSNIemJ1ajcn+Y2HeMV5qmlPSal5vdeXygR+f0wtz2a1MBACyOnQn6D2wxbHMsJ0tNr8NZylmxVNSiFFNQxEkrvvJA7f7YK47QTLmg4qq6V1KqhVthBPNPewna++M78J8KfMrUNGpTnTekzEMQCIJkadMeZMzjTf8FLJ9o11LQgJbTtqiBAEj8cY38Na+r5fL7zXywaYGnHed5SlSKqKJXUzWY3J5ZkRtvFhgxn0qQ+p1JACAcpZiQJ6Dcb7W96/BNOmuoIXBuZkWPedhIB98W0+IBR4oRXBedJ0kMVMLa8EMA3lPlgQgIN/j5xi1muqIB4gPt67zqnnUQ1KMSjDckGCoJG97GRJiwOKc/TatRSohEmIUyzEQLkx0/obYH4pn0qPFSmKIJEshaCx0ltUNbkO4Fz9QyzOcapTFOlU0wQECmNxMCPW58r4jGy+EbmBRpc6qUqHAgWZBDEOgjQO45VGxJM6iR07eeOM2ADC6iizAhpUsAJJm4846nFuYotVUBmLVEMEVTsY2Jk2/t74R+KxGgK0bmDItubDSNoAB7DqMOAtk9YipWsvLU3Fzn0+0d5viesnVpVmNyafS1tVjAECBffzxbkOEKVl3sqsy1KcRpF2BBvI9R83lgXKVKQLtV8RfurAnSTBkauXUAIm5wNxSmul1ytR3ZmUMGSDLQAOQmes2HTGYrcgKbTUK7KorFd8XuAO23WU8UzymmETmUHUdA16iC0jtZgD+rTIZda1NqytpKmD0EwCBMSO3X3wdkuE0aPhtUQmqCBCtZBtJB6nzPU4CzmbX7VqVUPTeoxVGBQFgAe/yrO83tbs11/auDvMwuQGqC4tYfKF04p0NZLBm21ADuIIMj388LMzmHBUrYkGDp7wN/ae0Tj3J14pgVCSDPKTqWT0EbH0vgYMdAMGNgSOUtMQD3k7bxggGUW6xTVcjTi23nG1PPSHABYg3hosBOzbLtfAmcql0XmBNi7TIj7oBFiRe1oxTwzMC6GxflYCbTF4K7mL36YccVyLB05aDMQCrCXWmo7Jbm1Rv36xgr6vCTmGSGTrj0vDPhelzFtmsW1AmRFjO282xrxnCB8qG3YD8cZrhOSpqSQ9Q1YuzgkHaQD09jP0w8cNo5YVyLDf/VigNOI6gLraXtxSgDDCkCNwXUR5b4mPMrDorCbgbiCO4IOxBsR3GJhd460+fFSrEEQVaCOxBvhpWp6kZT1Ui4ncdjvhbnDDtcGbyDMzff3wzpmQDjqTndImWkzCmgQKoA0m9jpGq09b7RHtiV8jTpI1RWaowcKBpsSZktBNp2x1TpGmQiEk6yzEEmTe1z06+pOCeH0KtSnWpQA7SGGw3E7dOXGMZlOmliozEH7PVrOT4rAR8qsdthPSR0PNYd8M6b0KVCvCBSVWKnisxqsAYu1wBvaO2A1KU8uTpl2qCWkyu/5kAf8ATCl6lSqzI4ZggAJFxvN+n+wGL1GWpwRaX5SmVZqhAuOUWIkxNjudVvb3w2znFKgphAhblI8Q2gRClZsSLz6i9zKLM8Rcuda3JkBd53ta5t2E4uzVKor6SRJHab9htt5kfhgPFe8JlLknyH0g9TSQHKCJkoDtN5J3846TbbHFUyFLqB1nbcj3iIFtsXVMwFVgq6WmCTBgeXQRBAjDDhPw7UzClw9EQQCHdtZO8wqNaIE22OIWC3LGEtMsbARpw1ctVy9U+GQaSFm5m2AMEDVBuDYj88ZXguWOZMGqKQUAatJbzgRcbdMaOnwbR4lMMEOkqzU2bTcGQdYuBY9gZxRwXI+HKUgKjBpL6YUXtN5j/rfCqeAxQ77fD1mvw+HWLW3+PpDfi1hUyqUvFUtqBbe4AIBFr9DHfCyh8LVAWU6ZBFmFyBHWLf8AX30eXyKlGeoNLrsN7wAAvaNJOGD5l2KAoKaMwliCDABkpe5gDeNxuBiqYanRsm/1keqjVrH8v0i3L/D6UipGnnEMac2gW1Ej6DBuUhXZXBYQWBInSZJEEAxEdL79cXBHGsrTJ0sdUbFQbW9DMeYxOLVKWkmjSK1VImoCYWbkaTI2tAi/piyALahcn6RVV2cEKfCv1gfEwCikBday0sCeUwSLiYIg9NsJ+BUxrYEqASrtIXYAnaxPQfTDKjnHqDSiS4UAEzMKWJPly9Jiw9MA6dJMKBUYQZ3EyY8rED2wWu5vMbYs0EzObasWFoKwLLZh8nzewntgvhWQzOkMFKsGk7mBFhKmN5JA8se8O4OKqGo9TwgGC3joB6Xk98cZrirU9NOhUuL3EqRo2JmTHWOu2wxdJg2DKGo7xlVy+YqO1NKa692bUBqsf3zfYXG3vgXP8KSmkNrWtTgwHXSTYiYBuNxftgrOcVAUaHpuL2B1QQLQO89bWx1l84oL1dJdmlk1QyiLWW9hvfr6YGkxdrsJpr0KdNfC1zF3GKIoSbMDpufmHKQCY3vJvtbvjzIZ8UDq0hwVJi9z0i0jb6jBFR2ZWNWnrL2YmbFiL26/Ko9MZzM0VJdFBBgEA3A2uQLgR674YaYvcTO1RmAUnA2mnoZ9azpSoiprqOCWYgEEA8uzcoHW+Lc1wtzroUlAKypVh9oV3PzCWUzMAnfsLF/DuVSh9tqiVjmhoWALHdSdyPMbbYL4sxqujrKhWHMb9drHrfEYODi0fSCMtnJ+0ydfgFZEDlblo0ATpnqdNu31+hPxPnfsxRC6dTiGIlVCgwLg363B63xouKEgINRgBmAWZm3zX0tY2BW0HCilpbSHqUtL38N3KsVBMANoYKQR7x74iMoZlHSL5JUBu8RcK4mol3NPkFgVDEmZXcSIva0W9nFDjYchKFGnSLxJYtp+i3uPuid8L+M8HQk/squACdS7mAL2idupNh74u4Pk6gN3cAE3K2PcjUYvvad8ChDkuDNFUOgFJxbrjr8ZqchQUkmwG3KGWBM/NCvfedvPBOQ4fROqq6F6xUKaTNrKlZkU9fOVJMzeRHpjnhu0lp7EXEf0t0wysTBlvWD+GLxHobCZuvWy1Ri7wrHcGkpIi29QBunXEwfmOGMWYgWJJ38/XHuCGmJLJf8AIfX/AMmHyjStyT6mfxN/rh5k35RjN8NflIkWOHvDnlT5HGmkbqJkXaJ+I5g06r6CZ1GRaB4gExMm/UwPLFicadVOg6WedRgGxtbt+f44B+LEIqgiAIDSTF7rbqbDoDE4mSQMhIdeXQSWmDNyBpM2iPcyMIqAi9pFQk4lGWV6zhQqaARYgkQFBLNEem43Prgqrk2QlWqgo7AeGhgA/d1b7bXB3Am+O8hSCyKwcjUSoUQHufkFuWxNhfHebZmUgfZqDML8w6A2sPzwBx5TSqAjaU1Mur1XWdKqbhBc227mfPtjysj1Ki2KAmVvfZuvoD9MG/DeVDNVYiSH0wd56yfXf0wwzuTfxqTFZUXOnewaLC8c2/1wOvOkDMMU8ajMlxHJxU0KPmKxPW5Bn3B+uNZlMv4DLURWcoYKja4+9GxmMMKXwNVraajMqWDKwJcmTNwCIIB69RF9xdmuFHLlVK6VpsjB2qLpeTLSDcGxhfLC+ZTqNyy2eokDtSuyiZcUaiKGnXfnX1tLQet9tu9xjQUMxSF6LOgA+QwQtpI7N3tf88Ls1TzGtqtCkKqSeUujLBk6dCMSTB3J9tsTK53wSKlWk1NxsDTMAEfLpZlnfaevrDAPfaZhUZSSNo+zOepNR0o3MlmYASSTvv7QSYwHRp5hgjUUqEKS0hNQNr2EzMEe8YXUuI0qdRwaSspUtK6xJN1F25JkAkm2m+Oc3xIKGNNWHQFH/wAMT/FPse56dZUYkWjKKA6nJsB/c0fFuN0wNIVFrkqAyqBbqHMGxA2g9OwOMsM4lSppqOlMprqWDElifl5hAUkxF7DCzMZjxCWOrUbmymTG88vlhzwD4ZTOAsldEcDmVlIYXttYrHY+WEoVpJ4jiVWfmVDy9vf1huW4waKfYusBRqpo4YC4mwNmvv5Xxbkab5uqz1FIYhdFrlRN+1x16bbiMKOJfCzZS7V1YkBSFEE7webuAbR93rjnJcSqUyFLOgNmEGIH7pmwvHXBMoc6l62zCasvJFIjIJ/r/MZZnhlc1Gp03pCmGBUtYAkHlAp/Nc36GDOB1z1WhVejyIiz4i0wOqAyDp1FYAMSIB8saGjnE8M15DKAT3iPXr0jGOPEGNerXIUl7M0GwiFAExMADznDaiJp095nWoabBhPc/oFR31krC6dIB1SqgBb7S3a2LuEZd6sKz00pi7MAZ2HKs28r+2+FuYz1LUxgjSpUbMBsbRF+vafLBmQzBbwlLAhd4tFydmjc3se+JTXb4fzKd9TFu+Y9oViPs6aMaRDBm5pDg8qldhO8xBJEQYBCrZM0yK9WmUEaWJgEztynzj9207xi6lnRTqs1PUrKUns4Mi37xBsf8vpj3ifFa/jI88qSVcWgkc3l5bbXm+H9JFAJsZdkK1SnS1MqMdY02GoE2E9uhAuBf0BGYzKyGbSpBltIgGFaSq/ebSZsOo6nGe+IfiWvUSkCdRRtRizMI+sEG8evTCnKZx6RLM3iAmdMSQoKgc3Q3A0mfl6QDjGlIu4qMbTp12FFOQoz1PwOZrn49UZG0/4cwJAMjr0/U74EXJIyF2WSqxYmf4dInctH4YAzFJaYZVcSrLsdJEnmnUezRadsc53PsADS1Ar9+Igm3LFiexnrO4w8KFU23mKvW5jgjAG0GPE3BMs6OCQygkSdjJsY6QPXDzg/GCUCQJWZEwDvEdRA36GYv0zFfIlhrD77ySdzHzG+o3Jw+4bkvDIMgkjmPmTsJgx32398AEsMbSB3dxqN/tNLTzCzAaCQTFpMRJje0j64KpM3rjNO32gqrOpRpKkfMCfLrN/bDfK5l45onuD+VtsWcCbSAALR0lUxsPoMe4VjPN0B+uJheZeJ824VOtwxAYiSszfuPUG/pjScItqHpjPcOy7ePUUIxZLGBJIWxZoFpmffG7+Gfh01aa1zUAUlgyabrBt13Nj6Eb40vxNOihaobCc9UJwJk/jJC3hx1DdJ2Ita/wB78MMv+zk02ZqNSnTaVlWZATIYzc7WI2PTGm+IeAUUFImo+lmIIhSwEbrsBeLnbz2wXkuD5EslShTekUUhdDRPTmDTJ9ffHL43jaT0sE2bY5mmlSIzBeMcIoIFSgBTP31SSNgQYJMGP6YT5zhn2bLKr3Y3+nnbbFvF+JFKz00mrUm4AmJAgt2kRuQPXHWR4a1bmrtJH3LaV9eh37e2GcOhFNS56eZPv4x98WERZCq1NqvhMD4jBgxG1oJvuSf0MNKHByzqaj6tQLHVO40wNPUDUf74YVqCU2GldRJMKDH0mLb4HzdZtVM1U0gzy7ki2qWO5MdPwxrUk/ARbFVxe5jtOK0svlKoRhNwNIsGI6Rv6+WMdxHj1XMFBranSCqTJIAa++m/+XymLTgr4lzIekStNVC/LAHUgXMdsI8pmJTQUDMBKSBAk326ifoOkYyDh0Dluuc+cy1qpvpm8yuZy1HLlUqa2ALS+ka23IHbyF/XGM4hxyt4hqUPsqRMEArAhV1BgB82okg3kEWtgVF2LqAPMEE26AEfXbBWWzVF2ajUpEI0WDfKdgdgZnrP4bVwtEU6hcm5PnBbiNYC2sBDGr1a1OXorVDMKcGnzGSQmo09LAcp0ib2v1x3m+AOB9vlMymsk/ZMKgm0krdh7t0w0+C3/ZsyysxiqCFkWaIKRDHYatxbym7b4x42RTNKgQahBkyOUfeYzsJtPn5YqtxdQVhSC3vDVAU1EzAPwtJIpV0k7JU5D/zGLeR98bP4W4QmWBdqkmoqr2APWB5xvJsB6nPcM4O7t8hLQppoBIvPNq2iJtPabbsqHB66VoqpUQMSNQPKTEi4sTaRPaemH8QKbUWR8Ej3iBTOlgQIi+KeKGvmG0pKqWCiZLlRdjNgCBt2U98KEzfhsRqIsJg91mbT0IPX3xqPiPiapVCeGlYhYZnUatiIDIA3ykzPQnzwh/YMrWMoWQj5gwLqLQF5WpxA7BrQN9mcOEqICp+hlOoub7xkfGGXYKTqLwoJBDLAJLdgInVYiO2FRzKNZlEU/m0kiWMwSDPcx2EdScbDhuWbw/C8SlJkEr8wW0ALWEk99u3S8zXBqNIHwcv4tcwQrMRJ2BIY6ABvJw8pYZgWnz2jlAXUCVR2bQKikSszym8iLTaT641nBWdGGWdkakpJNMaTdgbmBqBgd7CBsRg2t8N5vmrZ6jTZQB/hmXp7WUKJKgmTBJG98MqXD8llqBqeFqdgTqZ21MSSdwbKPIdOpOMXE8TT0eHJJsLd5oop/uAtM5xfiJo1oKqqsFSkIglWMu5I3UCw8yeoxz8SpD/s4GqR8yn0JldvMi0GcVcZ4q+YWlTNKnM6qcTqEGANRY9jA8xM3llSyK0adMOEWoo6mIk7SbEDqRvG2NSE6ADAq6NR0xNmuEGmr1qzLy6fCuSJBkahHleegx1wLhrZmsVYqLameYiO8fNJt3N74cVc1TNRab6XpgHV2LbSf3gNo2/DFOezdOgzmhH2yFtuUBdQ5doaVaRe8bYthYXEiE1HAY7kfaEH4FZyWfMooLkggFp9ZII+hwnzPBDTrGnVBAB+6QZBA5g0RedoBEjvGGo+JhTOgJqWVJYOCdOkGy77kdepxlc3mmd2cklnblEyfIYyqtVj8CP5j6tOirWXNj6xylOiruMvriw573AgwYFpk+9rYb0qYiwA7x1PU/r+mBMhlU0oQATB5h7RJG07xhsKEESLbA3/AFv5YaceHtDpqN4NXywbSNZUhgymOo7zuPI4Y6Wa50X6osT57mME0EoCNTsPIrPrdT+vPDp8rS0gAhgTYg/mbR64u5taN1G1pi8zwLLOxZ6aljuZN8TG6HDKf6IP9cTEu0G4iJ+KvTy4q+IgqGihNbSCSIBkmJZRJOM3l/iOoKh1S1Ssw1MDAhQBePL64Q/EArGwM0woAUH7pmBHqosOkYrU8waCIAifr19sZuG4FQjLUzqP8dv4mZq9yCs2YpvVaFGtrfMwHUdWt7YdZfheYpS6KHmPsiyhgepU7EbWN977DCjgOZAotUcquljJIExAjzjtjScLzKsuoRI3gzB9scz8RrPqI0eEY9/Saaa4veKcz4aEiqFVmYllIAM73v8A1uPXCutxKbU/l/eIgeigb+p7++OuLP4tV21Lrbex5dgAbXsB9MArk9LnXW8QRcKIjeLxttbvjs6BTS5Ez/6q5tPajOSrJlqtWSZdBUJ7biR/lt6494vWUWdbi6hTB3/i2wX8L53w64VarhakqEJsDcg3Alibe/02mZ4fSq6mqUKb1NJgkAEztJ/6+WMtXjmpVeUy77QOWag1gz5TUzAqP9qHWQVVQ/KNW9go5ut8D5jIlSFFwRAJ73mfMbe3thjxag2XZqdQRUvB7z1B/d89zBFrgJ6lVjpBMyYUnbzjoMaKjKdplduh3nB1HTAuOpaDtAFzFtvfF+RypOt31Bgy3KkzMmZ63H44qEgkC0Nbp0n02PrhpksoeQIIYgyY25ev+aPTfpgqIGZSC5tL6Wc1KoXSah1KDvp1Iy7juSLjsfPB4zFOnSUU1Us921ybL+/eSf4ZgSfTGY/aKtMutN2Z1d5b5oCg6tAYEFiBAMbsY2nHOYrGxGkoCFBBKmSoP3SFvttinQk3BjypC3jngdV6ubo1VMEuFcARpCmfX5bz54b/ABtxmqMxpVo0UlgfxMxkwe6xjN8LoOo8WKiAuulmFvlIseUQNIHWLYMzuZp160eIpbUNTsdMzso1ACAVgXvP1TUpFqwYZFrepl3slh5xHxNirA1FBDidQmSeouSANumC+DVqUBdfh1HJKhtmk9xt2URcg9r3cbyhLLqHKoOi9nJKzBG6gDceYEbhdUyOrM1TT+4otvcgbdgANum2NwsptK0eHUY3z2SZaQNKoxmdaDvN42aPUbYEp8VrLyh3UbFLwbblTbBuXOqVP3ot5kf1GOM9wyov+HqdQnUA6SCOhG2mQIGKYkjEUJtc38SvlsgleNdTRSsdpfSOnrtjG5/ixrT4jKmsQoZWiJtzJJWYn5WscWZjiIrZenRYMEBEspEwrcsapBO0CwnTcA4Sf8Kdl1o0kNLIxgqJMQLgKBbcjzxi4LhBTu7b3NvKaatTUMbY9YYvCqq16dajozCLf7NpPQkFBzi83AwSeE53MU2cipWKMFIPzgtey7xeeseUGM7XY05MEkdbjv29AcbHgnxAgyyaqlU1edm0s0gBjpEfLsO3UYfxL6VvY7+f1EVSphzbaJFylSmy06qPTLfLqWDe0kN90kHFeeVvEEEMEUKgFjHMASN5g6j5zjV5ni5rCmzlXZQdL2urbzEXHoN9uuMXxRw1ZgFOkN0A2Fjv1kfjhgNks0s0yuRLuHZMGswJ3NiZBFpBPaJmD5D0a8QydOmUpoAzEjSsfKT8rFjt1j3gYoyvFfBnwQDoXmm4kybyYkeXYY6yufVa1M1GW0uSLqGqCbxsRy+hnA0ySxMYjAix3mjyLstPQpAKwCBt37TGCKVK9pjf9d8DZMqRIZTquYP9vK2D6UdLR7fq/TEJJ3mpFUDwzzw4+9fE8XTJtbf9d8EafUg+v6jCbjXEAjCkIA3MfgP64OkmtrS2NheC1uOVdRiowHacTCeqRJviY6Wle0z3MMpVOeWiOUSRsJP++NvX+E6YQKlRlcidShQs9wqgEeXNPrjB5zLON5M3mIX2mwUC2Csp8WVE00yzOkgRMQNO3mBBuccLjBxGkGgbEfzEUSl7PN5wPKZemGpqlNyqrrq6Rzk6t5JuIveL+2FXxRn6FAImXCLULhn0CBAiQ0QLhp9px3wOqvhsxIHMdR7wBF/fGXzWXqVsxVZkXw5eGlgYHygSY1GB0iMYFXXxFQOfCLb9TiaHcqgK7mc5XXU1kNeCfeY/XpgXxdBGox5nuN/15jHmQRkEaaizuJDE9rCMTidGFkGnUB6hgAP5tUSfK6+Z2HadAyETCO8Z8JhXltlbl9mkR7gXxoOOcfC0w1N4Z50wwBYAX099wcYOs1XwzCliwjlvvbceWFNejULKSG006cjePmCkDpOo/hjJxPC81lPa8fSqlQVtvH2TyVfM1tRKmmdMswSVB/hkEx5G8Y0OY+BGWKlJ0eASRpdWB7rDmY7WOMl8PZ7RWUEnmlbbbyv9R6t5Y+i5TjRoy1UmLup7ybr6yQPeeuM1WrVSoAoBGMSkVGGZk8rw+iCFVec31G8DuZ2+vbfHWfzFWhVYAqSyBRcLeeWzQIvtvf0jUfBbUqivq0+MX1aeyxYj3J9LeWLPiz4YavUpVaIGoclSeiatQYfxTK94fyxqbi1Wpo2+Mi0bi4nzKktVGZiu4+YbGTqN1tfyPXBOSo0HCUHUU0mGdGJJYgBXbWT1FyIF/bFOaqtTqOjAo6uwMGIvsPKf6YroZ0ggtBM9RJMHvv8Ajiar7RfMKm3SfQOC5ZTlTQrR4YRtZOy6QeaehBEzjB8PyD6gzAzMhWBE6QdI7wDF+m3UY1PCMz4q6S70kIBYqFl2F9J1AwoO8e+DTSoqQxAdyIUlrxM31HbrJwPB8LUQFj1N7RxqLj4TKM5KvDlVNRdIhgumS3LaIC298Ofh3hFF6hqu0up+4NAAPQ6TzbRt3wL8UZ9QugLDn7x2gdpsBbA/wtmPBFZ6kiRTMnr856+WD4suKZCHMoVSWBtiMP2+k1SuC6qxmGI+WD08wJExjPcUzbsNClmU2Bs07gaokXnY+eE+ezV7c0mRIgtJ3PW/af8AdpRonL+FXFT7cqdOndS3LPmQNVu8/u3ciad8QdJa7HAlL1wtYUBsBzHpK/LcdOU+7Hyw3ynB63ipmNYWlZWktqNrgAC+4O4jfDGhlKVJFaoBrJuwBjYnYcoA9vfDzhuZRaFcVPkYlojYlRBHWZAwNaryipte+IYOpdMymeyaTYg9m0wD5ESY9vpjV/B1DKigC9BBVQkFysh7kqbWJAP1x86P2uYNbT4dNYCjqRJFz3Iufww54d8R6F0pTLa6l4kc1hYkQZAHpN8Bx6vUpFae+PhCoAK2o7TY/EvEcvUR6dIqlZFLNUFMcihS2npMjpt3x88fM0wsaX17lyVSZmQaYDAb9G6euGqN4jvXpty1QyaCBJkgsfMEqoFgYWItJQ8QyVQ1FKp0387D1w+jRNOmqk3Pc5zF1X1bQilT1r4gDFdWnaJYgm0bwJFgIg4bcGTWjckxAUTAYHa8XI2gdIwJl8zopGmkbbr0kQx7SYE+k3w74SQiUlvaTa8fotiG65h06Sv1841yeQVbwJgSY+t+2GC0ztilVkgEt9B/vghaQgSw29jgDc7zaqhRYTio7AjYDfz8+sD+uMN8WIyVjO7AMD+vTH0rIUFN+n5/7YV/HnAf2mjqp/4lOdPmOow2i2lrmRl1C0+Vf8XHUgHz3xMJswIYhhBBggjEx0pln6RzOYourJWenpNiHIAP1/MY+O8Zp01rMtFy6BjpbuACB6i8A9cHcf4qzsTAKDZSAY87ixwjy+YDMNSJpAJMEzAI84B9tsee/D+EainjOT07RHEVFdrL0jc1KlNPD1mLEwd4/X4YZcFzhYAMZAt7XwsLqyqxJWbw0XETOoCYsBt1t1xxlKj3KlY2swAGx+8R29cPr0BUU2Gd/nFhjNBR+E67imtPM02pgDUWL6p0gGOUwD2nrecZbj1V6OZqZZ6dMaLMy3LAqCGnYTqU7SJI3xsv+z/P1EerTqzp1AodxedQkWifzOEWY4NVzXFK9JCqguWdidqZFEGJuTKiB3Y9JwqnVqh2WqcAeXaaGRCoK9YPm3pprQL8oWTtdgCsH0M/q6ilmWHykgE3i1t9/wBbY+1JwfLIIWhTIAAl1DEwIElpMwN8Yf4/4VSy5SrQQIHOhlFkmCQdO0QDbawtvhNL8RpVauhb9vfpAqUGUaukF+HOG06lLW5Ws5AKgmSBFpg6gCev074D4rxN9bUcxK01hhpEtFxA7g7Xva5OAeFZ2ilNhUVy2ouSBMyFH5AYTvm/FrMxBCkQAOlx+MSfXHRZVIBttFD4TW/D3HabZqkiUygdmUs5MkgEjTpBUXAN26RjZZj4zytN3HigkWsGK+gIBmPLHyx83eKYhVqu6dDzLpFjeYwOhFri8+3aZtH++MfE8MlZrnHl3zG87l+Fcx1x7MnOVqtVFYhTCyPmUC0R/KeW55/LFVPJBURX5SVBY9RudPqT+RxXwKuFqBmJCzzxFwegH7x6f2BwfxKitfnQ8x1FEkAoqwCHkxJN5BM9LDGmkqhQB5RJJfMsyuYgADe4CjpHT/c4b5HKltzzHr29PLC7hfDWA1MIY+49AZx7xzL5imAFgMxCqJvLEAbC2/e2DNQKQGO+0iqTFvxTWpgrTpMGAf7YmCDEgoFM6jvNrWvvA9biiOniVFApidIEkkmLmTHY2MYr4fwBXqsslkpMVqMbBj+4sd9yZsPWw+Z1VCR4eoaydI6gQABHQgWjEZgSBNIVkFveJ7w34cr1/twNSFgxYGIUEdGgyduomL9cbWjkqSwzqC4/DsB6d98UZjj4pJSSnTCq1MMAG23A0kC62ses+eFGd4+SQafQyWMTI6DT+ZJmemLeoL5ineG/FmYASCwV2IhRuADuY2FvUn0snpfEFVEsYLGNpmBf3kjAefqeKGqQTVksxF5FhAG8AfQL5nAlOA9FGnW9hEWk/wBsKbxWaBZr+GFLR1ERAYnYn/S3XzBvtvj6Pl+A5PxKnhr4dJacArqJL1JtBuSEFx2eekjI1/hJwKbg60cxKg8p3GoRYECBv+WNTw34jpJpZqlMLLAyQCRcCD942EEzaMY67khXpnvt9fQ/OaeHQgHVMrmMo9A6HBADTcRMmbdI62x7xOm3g6rEqbT9GIIuAoPQ736Y3fxfTXM5KnUoFXQOG1SFtDC2rqWIWMZBqRNcU9Sgb6f4ZkAA7z1PmTGOhw1cvT1HBEWyWawi7heTGkcwAn6jsJ8tsaahl9N22It03/rAB/64z/Asqhq1GVeVSdIJ+kEzG3440FEmIYkXuSBeBAjtiPkzVRUILXzGNKjIIBgzfy7TP688W5emSdLAb/MDb6HY++KV2Er/AF/6fhhjkBPTb+uFzQMmMKZAsLAYozGaj/bHVZDFsJOJ5spOqB2wQjQBF2cyNF3Ziikk9hiYV1eIiTbHmGZkuJl6zHSpm+POHKDWUG4vY4mJixuJ5/rLsi5NNySSZS5364tyijxHsLI5H0xMTFLvLhGYUeHMCQwv1urT+Q+mKKvEayty1ai3fZ2HWn2PniYmBtgeUfQ/NPqORrsyrqZjYbkn88K/+0//AO0p/wDir/pfExMeU4P9Yec6PFfkM+WNjjJqPEb+T/2piYmPUpsZyE2Mlc/ljqiP6YmJgx+nB6Q2v8tP+Un31uJ9YAHsMaXh3+Gp62vj3EwsSxvLeJ12Tw9DMsugOkkTLrMxvhx8RD/6j/8Ar/XExMZOK/Wp/P6Tbw/1Ez3DT/8A5s9WNUk9SdbST3OBOBn7Y/yN+WJiY2d/Mwqn56cztQ/43kQB5DXsOw8sEcPFm/l/9y4mJiqu0yNuZMsb4LqDmy56+Mv9cTEwn93r/Uuh+afSKTEZLMEdKNvwx8iU83v/AFxMTGf8O/TPmYyvsJ9D4HUP/CaYkwazAiemuY9JvgnNUVtyjlgrYcthEdvbExMaaPX/AJGMTb/rM78PqJr2FmAHlY7Ye5Lp6nExMankpfqCMqDEkA3F7ekxhtwsWxMTCpuG8JqH9e+Mn8R/KcTEwYjJinN8TExMNi5//9k="
					}]
				}, {
					id: 2,
					name: "Van Oranje",
					address: {
						street: "Laankade 15",
						city: "1000 AA Midelburg"
					},
					phoneNumber: "06 12345678",
					imgUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-DndCxoheCTti3iAfgIOla-DYhif6kBFrIjscpBQXQR-yWPOf"
				}]
			};

			this.oGrowerModel = new sap.ui.model.json.JSONModel(Grower);
			this.oGrowerAdvisorModel = new sap.ui.model.json.JSONModel(GrowerAdvisor);
			var oModel = new sap.ui.model.json.JSONModel(oData);

			sap.ui.getCore().setModel(oModel, "growers");
		},

		goToCustomerSelectAsGrower: function(oEvent) {

			this.app = this.getView().byId("AppId");
			if (sap.ui.getCore().byId("customerSelectPageId") !== undefined) {
				this.app.to("customerSelectPageId");
			} else {
				var customerSelectPage = sap.ui.view({
					id: "customerSelectPageId",
					viewName: "dummenorangetnv.view.CustomerSelect",
					type: sap.ui.core.mvc.ViewType.XML

				});

				sap.ui.getCore().setModel(this.oGrowerModel, "logedGrower");

				this.app.addPage(customerSelectPage);
				this.app.to(customerSelectPage);
			}
		},

		goToCustomerSelectAsGrowerAdvisor: function(oEvent) {

			this.app = this.getView().byId("AppId");
			if (sap.ui.getCore().byId("customerSelectPageId") !== undefined) {
				this.app.to("customerSelectPageId");
			} else {
				var customerSelectPage = sap.ui.view({
					id: "customerSelectPageId",
					viewName: "dummenorangetnv.view.CustomerSelect",
					type: sap.ui.core.mvc.ViewType.XML

				});

				sap.ui.getCore().setModel(this.oGrowerAdvisorModel, "logedAdvisorModel");

				this.app.addPage(customerSelectPage);
				this.app.to(customerSelectPage);
			}
		},

		goToApprovalpage: function(oEvent) {

			this.app = this.getView().byId("AppId");
			if (sap.ui.getCore().byId("ApprovalPageId") !== undefined) {
				this.app.to("ApprovalPageId");
			} else {
				var customerSelectPage = sap.ui.view({
					id: "ApprovalPageId",
					viewName: "dummenorangetnv.view.ApprovalPage",
					type: sap.ui.core.mvc.ViewType.XML

				});

				sap.ui.getCore().setModel(this.oGrowerModel, "logedGrower");

				this.app.addPage(customerSelectPage);
				this.app.to(customerSelectPage);
			}
		},

		goToBayOverview: function(oEvent) {
			this.app = this.getView().byId("AppId");
			if (sap.ui.getCore().byId("bayOverviewPageId") !== undefined) {
				this.app.to("bayOverviewPageId");
			} else {
				var bayOverviewPage = sap.ui.view({
					id: "bayOverviewPageId",
					viewName: "dummenorangetnv.view.BayOverview",
					type: sap.ui.core.mvc.ViewType.XML
				});
				this.app.addPage(bayOverviewPage);
				this.app.to(bayOverviewPage);
			}
		},
		goToBayDetails: function(oEvent) {
			this.app = this.getView().byId("AppId");
			if (sap.ui.getCore().byId("bayDetailsPageId") !== undefined) {
				this.app.to("bayDetailsPageId");
			} else {
				var bayDetailsPage = sap.ui.view({
					id: "bayDetailsPageId",
					viewName: "dummenorangetnv.view.BayDetails",
					type: sap.ui.core.mvc.ViewType.XML
				});
				this.app.addPage(bayDetailsPage);
				this.app.to(bayDetailsPage);
			}
		},
		goToAddPlantsToABay: function(oEvent) {
			this.app = this.getView().byId("AppId");
			if (sap.ui.getCore().byId("addPlantsToBayPageId") !== undefined) {
				this.app.to("addPlantsToBayPageId");
			} else {
				var greenhouseSelectPage = sap.ui.view({
					id: "addPlantsToBayPageId",
					viewName: "dummenorangetnv.view.AddPlantsToBay",
					type: sap.ui.core.mvc.ViewType.XML
				});
				this.app.addPage(greenhouseSelectPage);
				this.app.to(greenhouseSelectPage);
			}
		},

		goToMultiAddPlants: function(oEvent) {
			var app = this.getView().byId("AppId");
			if (sap.ui.getCore().byId("multiAddPlantsPageId") !== undefined) {
				app.to("multiAddPlantsPageId");
			} else {
				var greenhouseSelectPage = sap.ui.view({
					id: "multiAddPlantsPageId",
					viewName: "dummenorangetnv.view.MultipleAddPlants",
					type: sap.ui.core.mvc.ViewType.XML
				});
				app.addPage(greenhouseSelectPage);
				app.to(greenhouseSelectPage);
			}
		},


		onAdd: function(oEvent) {

			var oModel = this.getView().getModel("odataModel");
			var sPath = "/GreenhouseBays";
			var oEntry = {};
			
			oEntry.Active = true;
			oEntry.AddressId = "1";
			oEntry.CustomerId = "1";
			oEntry.GreenhouseBayId = "1";
		
			oEntry.M2 = 100.10;
			oEntry.SortKey = 10;

			
			
// // 		{	oEntry.GrowerProductionPlanPattern = "pattern2";
// // 				oEntry.StartDatePlanning = new Date();
// // 					oEntry.Username = "p1941886841";
// // 			}
				
// // {		oEntry.DefaultM2 = 100.10;
// // 	//	oEntry.AddressId = 1;
// // 	//	oEntry.CustomerId = "1";
// // 		oEntry.Username = "p1941876107";}
		
// // 			
			console.log(oEntry);
			oModel.create(sPath, oEntry, null, function() {
				alert("successful");
			}, function() {
				alert("failed");
			});
// 			var sPath2 = "/GreenhouseBayDescriptions";
// // 			var oEntry2 = {};
// // 			oEntry.Description = true;
// // 			oEntry.Id = "1";
// // 			oEntry.CustomerId = "1";
// // 			oEntry.GreenhouseBayId = "1";
// 			// 			oEntry.M2 = 100.57;
// 			// 			oEntry.SortKey = 1;
// 			// 			oEntry.CustomerId = 3;
// 			// 			oEntry.CustomerId = "1";

		}

	});

});