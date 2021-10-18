import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function Friends() {
 
 
return (

    <main>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISFBAPEg8SEBISDBIPDBUVDxEQEQ8SJRQaJxkUJCQpIS4zKSw4LRgZNDg0OC8xNTU1KCQ7QDszPy40NTEBDAwMEA8QGBISGDQhGCExMTQ0MTQ0NDQxNDQ2NDE/NDQxMTQ0NDExND80MTQ0NDQxMTQxNDQ/MTE/PzE0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYHAQj/xABJEAACAQMDAgQEAwQGBQoHAAABAhEAAyEEEjFBUQUiYXEGE4GRMqHBFEJSsSNictHh8BUkotLxFjNDU1SCkpSywgc0Y2WTo9P/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QAKBEBAAICAgIBBAICAwAAAAAAAQACESEDMRJBBCIyUWETgRRxBUJS/9oADAMBAAIRAxEAPwDmNhFhy6nkDEBQxMj14rx0ZFkP5WwyqZAHqKelosYXqepwfpTP2Zhj1IOcc1ZJVzie2XQK6FQWIlW83l6wBxQQpPPsTHJ9+tHsWhI3gxkmOtSxqQE+WUUhQQpgSJM80SuYP9yvNsjjqNrYmmwRgcRHZvrVnYuQIheQTj9aZcQZMDJJOMLRae4rIEf3UiO3bOYozIIGDM8zyPavCppUxBmNEQ0rnG2DtC+460gO3angHv6H2olu2TjsD1jpXBlgWNRCY94qQlowPQEEds0UWYMEdAe4OKl2bTOVRUlidqhQSzH0iqBjcRfwSIloHgRUq3pfT+f6ce9aLQfCt9oa5ttrywkuTGNpAPPuT9KtU8GsouwqXaCXYnDmcYDQIGI/f6tE1K/yuLj95Y1eG1uiZR9MqMFuE7pV2RAC/wAs8EngT5YBlgpDQd0FarQ7CUJyCd2CNrSTsBOTEgEwMzxxWlXQhYYXJcMX3lE3Nc43kcSBG3gLAxOTXanQsczuMnqTyZOTjPJPep8Py62strB+pTk+PatTxJmblr+r71He1HeeuIq/1OndY3DH4VMCJ7T1qtayc+mDnM+lbjFjI5mZWrhlfEczx0OKG6enNS7iAfaR6VHYE/8AtpEhGR3SmFf8aMwP3pgHekSOMDt/zE0+2kkTjzck/pRFMEGMTnMSOopO4DblEDcCFI3SP4TSoY3HGeKwG0kYwCPxO+eZ6TTtWylyVELyo37oEnE95zStEZRohmUSIJHpnABn8q8dZHlUmGJmMmD2HArlMahzAiedpjO7tP8AFNP1AVjuVdgLRtknbxies80hfbaEnCztExEmTj3of/A0CET3PdrfwH7Uq9/bW7f7dKujZJZPbIhiMESvsMU0DnMdPWjFyRtgc4EZFeIs80xOCMZQD0YY4/CcU025+nGeKIVj9a8VD+tEYGMVAeu3t2NDuk1IAnkx14oBSfUbsdqZy9RFjEXHp0oltIIbmGBOAZz64r2zZLGD0qwt6U9ABAmuKr3EWQrds4MTAnIkAGcQO1TdJo2c4XpubiAv8RJ4qRoNO+7apEsdpztVpzk9B3ParDRaZtVeTSWmKWhD6i6F2F1nAHYmSB29wanzXOOv7lOPjbP6/MlfDvw6uocoitc2GLzkOtm23O0cFieeg9AOepeD/C9jTqIRS0+YhQvTrGfpMUvBLFuyiW7agKF8omeckz1Pc960CHHPSsNeW185dR7hVwEzPjzBAVVQMfasH4hqyJ83A56Gtz8QqSCY7zXPtfY9enXivO5H63U28AYJAGsIwTmdxzip2mv7hM/4VQvbgkbuD9KmaK9HXr35otTGSaNdTRJYVgQ2ZGMSD9KrPFPBDDMmI5UYEdYPXHTp0xVjZvcGr3w+2LgyMjM/54967g+VfhtpyeyZefgrY/c5S9uDnB3SSOSKivb6+0Y55rb/ABb4N8si6gMOxVxEbX5kehGT2YHvWP1CRX0fHevJQsdM8m1fGyMrrhj9aGSPyNGujrn1xigxE+1BNxhnjGMe0Y4psV6R/LNeTSW7jDEhIn1WMUgSMAkYzBjFKY4Pv2rxiu0eXzbu/lj0FBjjB/57z70qUUopYYqVexSrp0tthnPP50WZgZI5425/WiAkesiD3FehAOlUxCMYbf8AnrQ2BB8v1xUhR/hXpJEyoyIz+lEJy6kUEHynI/OvTYjI42/WiqhPPMRnijoAaepJrqC064yM+n61NQYmOmKVuyeeO3c0cpgDvnmKoB3JrI2qv/KsuQP6S63yreJAA/ER6ncoHoHq3+Fm2JIaSzATM7gCc+kncazXjl/bd+WDi1YAEiSG5MH+0zVc+EvstIs8Iv3zP5143zVtmer8eoVCdJ8P14HXtNa3RalXWAelck0OqaZmM963XgOrVcs4E9zWDh5GtsLqDn4tZJa+KaRrnlAkH0rPeLeEWrVtnvOltFEszOFQSIiSRNaPX+OaWyjXLuotooUtm4u4xmAJkn0AmuKfGfit3Vt864SEBBspuLJZXJgDjdxuPJJjAAFabcdFFe5Ph83OOiSNXd8OLGL7MJmUt3GUCO5ST+dS9B4NYvgtp9UHIG5gASU9wQCPqKwxcgQVJMSe8Dv96bY8TZGV0Yo6EFWU7WEcQelPb41Wv0uGX8k7nQnsNZYI4PEg8q3satPDfEkQqpI/EOvHvVFp/Hv2+wVdQuptQzKg2peQcuB0ImGHGVKyCQsyz4JeRPnXRsBjarAgsDwYAkY9BWC/E0XyI/kWMe5rNaLWptOgbzMoCkjbLfux3zFcq1+mKs6ldpVirCOCMET6cVda74muaaQltHEFY3XEx77jP2qNqPELWtVr9tWt31UtqrJIJKiB85SAAY4YeUgwYPNet/xtmp42+16nnfK4U+o7mVvpz0/maiOOx6dqs9anUenpIOZque2Tx/3q9K1d6marqCpRTvrTTUUc7jjEaQgUiPSP1pE0sJPHNCJojGaY4oMcMzylXk0qE7E0yJ/ntXrCnqRFe7Sa0BALmMFsV6bcevSjLbPvSgsD0IMHua4IFZHj+EZqTYSOeevpQLZ2khgeMelTrH51QIiwiARGfvipNuzJVT1IX74/WvLajtUpAF85gBSGM8CDRdEQ2zB+KvuuXzMk3CG/8RirbQ3o8u7/AAiBVJqj5rh6G4CufxAECaKlx2wn1b90e1eVy1LG2etx2w6mkfxUW/w9sZyai6jx244272UdlMufc9KrU0J5d8n7GrDTaFSQJPImKzNeOpl3LGVle2qefKCCfxEmWP1Mk/WKv/h/T/PW2lzIF2HgfiXeFUAyONzH7Vc+EfDukYF7oYgKzHzupA6kR17VTfDOsS3dBIbYmqLbUEs1vd+EA5JBVSPSaS1q3q+J1ODGZptXptFeW1pbQT5iorvb27mYjTvkmMkEgETMkVhPifwI6e5tAIBY7S34m4Jn1G6B3HtXSbOn0iXE19obmiDsLMjA6Vy0DiSVWTyCIrL/ABR4iurvqWANu2rBYB8zFVwfXE/Sk4rpYBz+YgeWMyD8F6LZqNNeceRdRb3T+8xYAe/PFdb+KxKW1BBe4+y2CcTgbjGQBImOWKr1rlaasjyqPwqxQASFjIj7V1XW397aVxB+Yltk6j/nrDMB2kAH6VTksWyMTmr42q1/c5X4x8N3/lDUkMQwNxllCVGxTuIjszAgMZgQTOM9otyuGU7GR9wYEhemSTmImQcxIrrd5r9wi3dRVs/Jdt6nc24La2KexIZ59qy/i/gdpNRqboZilvT3b9wKwBZwPKkjIBIGRnOM0OLmRK/nqPk8c2/uZXxC0JEYDKHTG3aCZ2x6GQPSoCWuR+c8mp952dizR+ECAuxVAkAAdAOAOeZyaDA/LNfRUqlDy7xPGunm+PUqtQkZPMxQwCRIj9am6pJMUFLVStXLHq6kbd/jSmpT2wc8Y2+9MNsfXj2ikaxiRyDx9aKqcz9M17szgevPFFZAIEZ5alQO5SpI/wCzj+F6VH2r/FSoaj4l6o/z3p8dj705FBzSif8APFWkg9w6kAD70ktznvk0BNzECZAP3ojsyxtWcHpxmuD3FWMvIS2eYANSEWOO0UJCzN5gZPbpU6zaI5En8xVSSsw+nHEr0jiTQPiFP9Vu9I+Uxz/XA4+tSUQg8cGvPHAW014AEkqox0bcNp+hg/Slv9rBR+snOjnr+JM/2pg/pU3QvCqZORnt2/SoqHIx1ZRn6j6HNPsYkdmgeinI/WvNuZJ63Gmdy5R5x96tNOAIj0mqPTk/ofarvSH8hA7RWDlr4k21wy31Gr+XYunP4CB9qxOgulZcHIuGYHfNaTxW7/RlB2z9qyeiOXTuQRVfi0GqPuTvpJrtNdW4OQD3jlvX1qv1thkbzD1Ukwu3uD0z1qPoLsYng5oniDsyxuMTIEyB9OvtXHF421GXWpC1WoZgyITtIO4gbWcdieg9Otd60ui+ZptNtbY9uxbKNtkKwVRJHURII6iQCOa4b4boWuHaCJKkIJBDvGFE49yfKvWu4/Cmu+Zp7e5Gt3LY+TfRgQyOAJBBznBBOSDNdy+OQJk584H3KPxTUXbai3ctuICqGCi4jAG35twMkeR5BVDkcRNU3j1s2tJed1K3dQETaQN62ywJJ6AnYMAkKAoBJLE9M1xtqrO+2FUtkTXJPjbWMzWkZsuXvPn8K8II9g1d8fhHmqf3M1+T6GZQrgt34jtjn7UIHrTrj4gfWhzAxX0SkwG4NxJ5xGaEw5g+2KJcNAd+/wBO9RsywQdwz+lCD9YEzkcmvXn86YRniZ7VNjEIgBJJxmef0r0c/i96clogSP8AhREtdlpLSlXcb8o/5NeUSH70qWUl0vOac5gR96fbSnXLMj6TVRksRloEfb6URyRAmfpxQ7JMjpj70W2QTJX+4UwxLQ+nxyPY96mKZ6dO+KEgEfy9aJbMdKZZG0kW7ZJzjpx+tF19vdZvqBn5Dso6kiGA+pSKCl1p4x1qVp72ZOYbPZ/SldiRBwjObNp4dh+6txSPUTE/UQabfTa+R+JQT2kYqZc0Wy7qtOQZVZTuVEDHptcH6VE1BlLL5kQpPXgg/mtYrGGetx2zUxJOnNW2nMcHpVTo56d4OatracRJ9hJrFz7MTUWwRuuuSCD/AAkCs/Z8r/WDV7ryB5WdU9C6A/YmaotSqqZDg+wc/ov5TT/GEMMFrayyaZBDCpTyyYgj96eaq9PqhwQx+g/U0fexVggYSCFLOqwYx+9V7VM5zOLmNTT/AAZaB1dpnhQCfM24IpGQAeB712X9kAf5y4LKEvQPxqAdre4nnsSOlfPGi02uTz2dQQ2791nQk9sqAc+tdH+B/iLxEXl0/iW0Wm05bT3WRPM4gBA6HaZBYkHMis1uMFtmZeWzZNYmv8euSqWx+J3AAHbg/YT965l8eXFGq2IykJp7dslSjAMNxZTHBlhg1uvGdYS150z+z6a5sIPNwiSQfQ7RXOvjW7u12oBzsFq02eWFlAx95mq/8aZuruZ+cSoShZvyx700PP8AnNPC9JzwPUUwrGPWvZWZQ9wZacz0gUMkzgDtRXArwKOoJPXtSMoQRQ9frFOsWj/dUm0giOu2R6U+0APtHH86mxwjktgDj3pMvQRUkKCP5nvQLog/ypGUCM2N6Uq883cUqEaWqSODH0owM8yfpih2ROPtUllI+1ORQzuR7kden4abbGZiOwpxtkmOaLZTPFMMSxlhLZJ6VIQnqPQ14voeuT3o1tRPH+NcslYnqIaKi8EU4IOmI/OvUgf5xXDM6Sq+KLS/6vdOALzWHbjarINpb0BDVlNSsW3WeDujqrEgxHT94j0Nbrx90Fhla2bu67bCoAxJJaZxnhXrGeKagOXAUDYFRYGNgChQPYYz0APWsnI4t1PT+K5rtkTTaj+FN5iMkhAYnpk1OX5jYa4YPKqdqgdoGfzNV2gGJ9SKubBUiOI4xzWLmsnRN1a6yxg0SAeUBeoxEj9frVR4haIzHtWjBqv8S08jjr3pOHkfLbOsCYlNojmD3kVc2IKwe+cxVJBRs+xqdbvDkHkTW22LGolcGmab4W0Nu7dRC91SW/El5rZGa62PBLNq3cD77ysil/mFLhJAIHm2gznk1xj4Z1wt3Q5OVYEDtFdV03ji6tkRXA2uruRiSDAHIzJGOtYOSyWR7YvLVUTolAfEDpNP4o1sq9zTX7diyXG9SjOACR1MBxPcGuc6nUtee5fuEG5dc3HIAA3EmYHQZGK6D/8AEWylnT3it1C2o1emQoCJXYrSBBkySSSQIJiuZoScD1Nep8Cla1yG2edz2bWkq2MYPvXrDrH+NOSFAH1NOQk52nbOMVuYgQJQ9p/Sm7P5zzVimnLDyic9oj3p50MByxk7ZUKOvaamscJCRJ46Lu5g0wmfvJxn716yETiO/dTHFMe4DH8URPekWUCSEun8IOOn9avWETNBsknge/vR9VhQDjH3qaxwgPrSoG896VLmNiabT2wYznrUsIDn6VCs1LV/f1qowB6g3tZ2z6mi2rQEH0j3prmMii227iPfr7UcyVjDHbAIAH72akIAOO/ahg0ZEn0/WiTPZjyJ475r1LfJAHBj3oqW6OiDtQX1JJKvxtf6HcVMI4LBfxBSrKT/ALWfSa5vfDq7piUIV8yMYJHcfpFdgaQG2krKkSpG9ccicE9geTiszofhdA7/AD2FwPIIUOgdfvjkYnmYxis9yymtTZwctQwuJgLNwqTxEyPMB9farKzrgP3SfsakPobYv30VAqC9cRBl4AaIyPTvVTqLQ3wvl53RiIMVnsFreKT0K2sVH1LF/Em6KF+v6VHbxF/4gKC1kQSCfTPFQ3WPv3o/w1DRHb/qSrl0vyZ+kUbSaO5cO1E3GYOBA+pxUS249R9JmrvwvX8IqlyeAqsxB9qhyWtU+k3GGvbLjwvwFbctd2M3pMr9ev0q68Idbf8ArAQNt1CW9KmQrXTwSOoA3n3IqqdNQfxW7iKVJLPauIFAEkny5AANEt+J2vlXWLFDbtINAkFrt25DB3YCYneTONoVeWmsVacl7NrMbktTxAnvjumW5oV1Dsr39+nvs8hnLOzqyMRxIVSQeuetZSyNpwOgH86lnWO2nCPO65qPnvkwVVSttY6AeaO8mopPb619B8WrWhmeRzY8nEl6ayzGSIE9RyKtNwULA/ewFHSvNLaJtj+zijoDMMV6RA9K1MnUg/2kmEVQMFie+etMN1ifw/lzR7m2fX8zQSQZgg/zqSyoQFwWz+IFTNQWtWwcEkdKlam0w6+tRmQiJ7TUljhElwrgKI/nQ7pJ5/nxRRbIyaa4xx1pWOGpHgUqdntSpYcTRW0I4jse9SAtNRjxAjkd6fJ7daoQ4c6npHpT1XqRXgUGc9akACBPbHrRzuTuM8tifX9Kl2x6e9BtJHNSkFHMy3GGtjrRSD0FMQ/4UUH+VBZFH3BzRLCz5jgT5jgKB3JNMYZCz1A96yHxL4lbV2R0t6i2pUDfuDKSsuAUZcCAOTkx0qXJdDRH4ePyt3Kezq7Xzb7veRd164y43FiWJB7RBql1DjfO9WySCHBxP5UfXazSuW26bYS5YlXuYJOYlj2FVThJ8oYCfeagGVt7np+dq1KmJZo+7AM/WaCNK9xoQFuAaba+WBIRzjPm2gfnVr4bqLYyNNevHjym6Fj1hqN1DUpW2TcsvC/hxBtN47jP4QDsH1HNdB+FRaskIqLbHVgu0kdRPNZLSX72Db8GduCdzXkn3l2q30V/xRgPl+CaeGJG5rgdBPQwwAj1rBel7Oc6Ib3r44mt+K7qXrTW7bJcc6e+kLFwK729qyB0ls+lcrbQ3NC211W781GVDuNtQAwkOCCSMqQAQsHPatR4s3iNttNqNRd0Wi2X2tWUsmXUujKWIE7gDtMc4xmq/U+EG6jMj6nVPba5cuXmXbauDygokhSY2sxIBAlgc1q4qmQt0zN0ZHcyeoliXZpLmZjbEYCxwBHAGIpWxnipr6bA55gYn1k002gGmBHvA+or1qoBiZcK5ZPsOSo6ALA9aRvA4zPAxIryIGCYjrTEENM9PKe1BtHCGKfxRMZgz/wrxECyeu2K9Lnj1+9OIHVhxiaRZUJEvHuOs881GuGZ98elE1VyDtP0qK9z/CkWEJ6WI5PFBd/8Kc1wHpTGPSPelYxG7q9r2KVLGmptjj8qkrHeoiGn3r+3ZyTccJaAG7edxHPTINc3K9spgDElqKKh7+1Ry1zbK23OECyAoWSoXHXLVLvI6O6BA+xiuHAmDE5Xrn7Uj8igdybVdBHW1P6etS0Q0HTC43FkDP7znP2WrRdFfj/oknsCx/8AUKX/ACaYzmQtw2zIgSnAE8fUxAH5iplvw5j+O9EYOxEBHtMmrDT+D6TBcvdMY33SV+wP6Ur8qq6ivA+5n96D9/PHl8+0nE4ECOcmuePqgrvJfZbBCuiW3JctBbIPMSJE7RjFda+IHs/KeyiogKFV2qAADjEESfcj3FcV8QvsgcKy/wBJqHJZWU7tpIyCJA80iW4PXmlLt2WpxFDMi6u4jHDIckk/K2MTPXP8qiIRu5A/7sj7Urupc/ibd9qElxgZEfYVSpiO2JON0fxjti3+tSNFrIO06m6izwixP0kVWPqnOCfyFSNF4hdtSbb7CeTAY/fpQtsxO8s6Jr9EVfyW017u8qjtvFtSR5WO1RgGCZPFD8N8b1egfaC6lYDoSEiDmehHX2OapbGt1t9hbOpcBjHmfaon0AJ+wpvjFi/pLnyrl0XG+TbZoLsgUqCFyAcAjp1qRUNe42f/AF1OnL4h4d4qvydTbNjVOu43UtoHBXcZ3+YEQDzA54q80Grs6m2bks9u2TpmvAXQt1NgDFckqCZBBHJmYYVyTT6RzZGotmLbErqHUkC2hxc3DJghYJBKmc1b+BeP6iwiNavg25lkgbTJnIEQw45EiKS+Q1A0F1NI3gFsqNm8eUMPOjrgcCQOvUk1WXvBiJyY4PkmD2kNWu0V4apP2jSMqXk816yRNtp5AxMHbwOscdTaa/Y1Ye26nT6lCq3UbDoxwP7SkkQehIBzUz5HMdOoPGudkxVvwuBHzRPEFD/OT/KvW8IP7ty2e0kj9Ks7tohmAMQdpzM8z+Yog0ZENO7E8RS/5/IOElHhp2MpV8NuAZ+X3X+kQD7c1F1uju/upvIcK2x0chjkSAZGO9aK54cxnGY3RPFQW8N2tDYHz7RaDMrFwfzAqlfnXXYQPDXGmZS/o70BjZuQdoXyPEnCiR34qJqFZHa26sjoxV1YQyxGIPHNdM0uhW2rL/EVtNB4U/KXj3c1NTwWzrNPYuXLFtnayqu0bLgZcfiGT0Ge1Wr8tT6jEm13icjQ9aIgH91aP4g+DL+n3XbQa7aAlhAa6g9R1HqPtWZRp6/rA9O1aK3LGRgHGof5i0qFsHelTRszVtqbFhWZ2llViATDsY47Cew+9S2uW1veHfMgpZ0iXHlcvcNi45nvkx9axj39Mph2+exxyQgPeFyfqTXmu8Ya5eNxj+6y8xtAWAo6RBrC1taVcToHinj9lFQ21Eb7MlRBhbwIEevl+1Vum8QBZySZZixxsg43COuSKw13xRo5wWSBHQNPNXXh3iS3Dt2xic8z6VHk4krmGnjmbbTa6IGI7zzUo+IryW6wuaqdPoFurtJwRiCAV+9RNT8NXAP6O96DcpBP14rMPpZVDO5ct4gszP35+lDPicGARzPNZ5/B9WmQGaMeRt4NV2oN+2ZdGkZyh/mKcr+GcVrLnxjxAhHKsTttu5ESR0E/VhWB1OtZ7dm2crbFxlMgnzOSQe3AxVvqPEPLe3hpa0E4J2+cGZ6TEZqgS3JAJ6gH6cfka3cFfEzM/J92p5asFufeiHSRwJ71Z2dOAIiaI1nFNblMxjjMZZRC35gOkwe49vWtX4X4TZtBdWLg1Py9r3LG02LqKSB82SrAgexyfrWfv2trGceaR346VP8AC/FGW5bnzLbDgqfwvbZYZDIPkIksD3rsrhHUmgM0+r+KGbm0eCNz3FuYPBwg4zzHuOaga7xbS3UUXLSfNa9atB2JZ0tBRvuEQASAoAE7RPdQaqbOjBlU1Gx+La3SAjCSOYI7cwKjeIeG6i2oe5YIQNJdQWQrMEgjBGOQSK4rVc53GsmJ0r4bteHAbdPrVR3RS9hyHRHI80AwYmZEsJ6VQfEfwtq7N27qNNpNunIFyLZF21+EFgBMgSCVkCAYheDkdOqOJB2mYzAPoQeCI6ED3rTeCfFeq0jKpu3Ht7pdJVWyRmCDAgHP51NyLhz+opVwJIOi8WNtlZWdIcOyyQQ4gGCSJmO/StPo/HBrt9rU3Ct4Smk1NsLZuKxB/oSZiD5gpMScHMGovjXiHhmvDXGtXNLe+WHe+uwA3DjzIDBHEsCDWZ1HhGoQllYG2jEu6E7htXdkEgzG0rzyuaBQf0x1E2bnV/BdTob9uxbULae2FtBNxS4HC5RupMkyeZkg5qellbcq9srtypB3ownnOQesGRmQTmOWWtRd1DWg82tajILZYfK+fbKhl3naACBtKk/iBzJINbzwbx75obRakxcVCu7cPODlXBGDIIPY89az8vHBhOupJ1fiKLO1RMTzEVQavxRbi3TIlUDc8MN3+9Vj4joIi1cJtM5mzeUNcs3REhWXJUieATH9YSRjPE9Nf073rdxCrfs25WG1luIWTzgjBHqOODBxU60c6lKtXTNbqvFdocnoN/PJW7cYH/8AUKnWLtxLLmyhufL8Rv2ti3/kOi/MfaQTg46NiIrE/NVk3l/L+z3gDEQI1HP1IrV/D+p+Zp9Tcnzft4cifwsRBj7k01lDP4gtUzLrTePA7EvJctsxgLdUWrjN/VOEf6Mrdh0qs+I/g21qQ9/TEWrwBLQu1XYZ2ssDafUwffmr3RKtxCjhLiNhlZQ6MD3BwT704eHXLHm05d7arHySxZ0UdLbHkdkYlegK0ePkTZJWMM5P/wAkPE/+yj/8tKus/wCmW/gu/wDkdR/v0q0fz2iZnz3fRFU7RnET5iBPfpUe6IMzkzNMe7ugev3p90z/ALX8xWoq+42T1AkzA9cetWvhT7Suf3jVR296laW5BHH196Fq5EhonludO+HtYJAP+HPStRbcHsefpXMfDdVtOG7H0rZ+HeIkKJI6HmvK5aIzUg7JdX0jIOYzkgflQEM4acDggNHtOT/OvBqARIPJobv1E/1qQyQB6mZ+N7aJYUW9Om15e5eRSro25htkY2EcDjcDOaxmi0T3WCAgMRtSYRWgQBI6wOtdK8QdbgNt18rIVAAJJWMnPrsrI6nwh9O4KrKhlZDhx3APbNa+LnxVr7nPHlzIN9NTYO27akDGUhvaRB/nRLWqsvEMUY4IaYB9xz9QK17+JW7ltJQODCurjcFP6ZiqTxLwG1cDPb8rdQCAPpPNdW9bOLGGO1wSou6PfII3ZxnA+tE0HgylsCDlcGZMZquvi9YaPUAhgf5Hj6VY6Lxi4ASi/KKrKEecsZ88k5+1UtWwfS6kHGdkJqfDbahlW8d4MFCu62O8kwR7AGq27rbu39m+YTae4i3Ru3IFViUHsJmtE3i1nVAJq7aoxUA3kLElewgZ9jv+nFR7Hh6PduafRsNSEto7sSib3PNoTt3RiMAmGxijVsG5zjqP8P8AFbdpBZ1Git3UiA6El4yRJJyMmI2wIFO8T8D0mpAfw6+xfcJ017/nI6lCOg6gnAmDMCo+o8L2SrM2mfhVuB0teoyJBn1Iqqe/dsOVna8SCjQWHQqQRM8SOeM8V1VXJAhjuPPhT6W5s1du7Y3AracAOpYkHdIkOsTJBMg4GCKPpvnaM/PF23cQgIHBL27iECQAwUGAoBH4gAsADNB/0uLitauvdabyNt3BrRUOpZYOZwSII5OBRLwvaF2RxvtOGK7l+ZavqRAkbonjI8wI5qv++5IN5jfEXF5jfskqWQ77bNu2iAGCk5IgCBhgoESM1P0PiiXUFq6+y+ptjw9y5RUO4lkuTiMyGPAiOoEc2bOp89ll01/aWNtt3y9U4gBUMYJM+UkLBERBmpveZtrgpdUgCQyk9pHP65xIzQwJhJTP4Z0zwD4hS+DodWrK6ttMnY6ODgg8hgSMjv61YfE3grtotQw23LllHbSuvlZrRILrHQ+SQBieOSK5n4hb1SpYuuVfag+ReVixZIEJI52nGciYrYfDnxa91P2VmCXdyFXcwqoCCWnkkbY+tZ2ni+VYHf6mB1mthWVTyCi4hQvLQOmGH3Nbb4M1YbS6pTzvtP7ZUH/1Cg/E/wACsDcv2x8t2u3G+WWHy9scKQBkkgQZ7dKh/DavYt6xLiFHQWyytggF7ZGPqD9aa/jamDudRV3OgeF6mF54MVrPDtUrgLOYBI/urlen8TAEhuuMwJ9+nvVz4X4s+5Us+e4y4BwiKTh3PbnHWsdc1uZNR+SvlXU6X5f4vzpVhf8ASP8A95H2t/71Ktf8h+Jm/itOAH9K93/3Uxm/z2rya9CDy/E9NPVutDpwFdCO5baLUEZrT6DWkxnFYuw0GDVzo9Qay83GO5q47ept9NqZ69KlpqyFOJO3gGIrM6TU9CcdPWpR1BxnqR7COBWBqjiVDO5fMqvsJhXBBwckRgTRNRZ3DY8N36EHqfXrVNptUFiD/Z9qsBqCSJk4AyeKVMTsIyl1WnNpskwW3LkgEcT716Li+VwYySVJk/2Qev8AhVlr7YuKRBPVc4BrOEMrbT0EfWqVCxGVxNJ4p4Ut/TG9A3ojENGYA4msFoh5T18sn0rqOkfdo2U/wMPupFcz8NWQ4/q/yEVbis+KMh2yMh5HfJEyD7inWE27mmCzbl2krtwQPtNMJzGfWnBiOP8AE1pTJABnLNNoPit7Xy0uG5ftAMl20727lpgY2wWRiI6gyY4YcUHXXPD7uy4EOjujz22sOl22jAyCVMEQQcAnPAqkLKw8yg/TP3oJtBfOjMjoC6GQ4kZjuDUwB/EFgTqTP9I23Zjetpfm603kUpduOf3jIggzMETuByOaPp7Luvy7F1L6NDLYc7CxyCQDAkdgSexmoOj1Sy4vW1u72Lu0bGB4MEEA8ZkRNN1FhP8AonxukJcHmA7Tx9qdNwVHEDc04mAGSW3MjSu7ngGPUCZNWF+81xIvWxdJlbV4ki7bAgAFohgBIhgGHIOKT+ItcG3VI94QyW3Zy72l3SSGkggEkwe5O7NN+d8vc1i6L9oqSyXEcEKOjDiQIAMkQcGa5WDRAaXxJ9MNhIvWHabtljKviN3UqexEGtb8AeHWtZqzqXJFjTknRWmhjuOZMYhYnOCxUcA1g7zi9cLKgtoTMAllRRBOTnoeatNP4g+nxbJQbdrBTlgTO37Z+tcmDrbEw296ncvGriOi6d9QbZvM50zhdgYSdqh8gEkDJILLxkmsp4lpGUPZ1lpnVxta9bG25s3AjeAADBUGRnuGqP4N8SDUK6oVvI7E6nT3jPPLIc7RMxkj1WrnTszLtszfRR59LeIS/Z/sMekcAkqe9ZrO9mGdWvjMD4h4JesrvtXP2mySYdBvZOwYZIP0B9KrNV4y1tH09l9jOT+1XSwBaBBUGJHPTpgda6Mvh1u873NJcfT30kXUddjgfwuhBDj1Eisz434PZc/60n7Ldnb862s2Lp7MMlD6iVjnaKNLGfqJVVMExHm/h/2DXtaH/kk3/brH/mdN/wD0pVXypFxaYelSpVrmae0eytBFSrI7fWuzKUMscEj9Kkad+9JRPApbCKVw6ZUMS20131qSl+YBIx/fVRbPrUlXn0j86y34zsmitpd6fnnrirNLveqLSakkiSOPofarEXscx+tZER3KBncnW9Qu765qF4oi7luAdIb70N7gP6V4t0MdpM9K6umck2Ph4B0hM/uSD6bTXMvCzlxHc+9dL0SRpUB/eV4/lXNvCxLuPePWMVWjpZnzvEh30hj703rUnWoA8VGGDWyrmpCm48GenpRflT5gM8HH4q8Tj1nPrRkBn6Cc1K84IRtIlwAxsaMkHmMcVXanQ3EyPMvEg8+9XEnECcz7VJ2EiP7v1qJyte4UJl7FxlIOR22kiPocGpt3ULsZNyEEMWzsuEkden0q8fw22y+ZYMTKnYf7jVTqfB+dt0RBAlSCfTEz+VVryVsmWJauNkolJHmHeeIwIjAp7hyAxB2gEAjgMc5o91Nu5SAf4Wg7SIhQPzodi6yYB6QyESG9a06TJJ4xHITIdWZWEFWDQy46HrmtL4b8U3UKJqJYKJS8pK3UPckc/wAu8is8UDea2Y6shO3Pp/dTd8+UgqeIIg/XvS2rW3ZOnVdP43bvqpuxdCibOptHZfsHuQMg9cY/q1afPDr/AEoXVWCub6IDdUf/AFEHPuPqJri9m9ctNutuymcwdoPuOtX/AIZ8UlGBYtZuSCWXKN6kdPes9uG1dmyEx+ZuP9HeD/8AWWP/ABXP92lVV/yuf/rrP3T/AHKVSxb8Q/3OTikKVKvTmWeipVmlSpfUrxybap9ylSpPcrEnT+1RU5/8H8hSpUlupQk7S8D3H8jViteUqx37l69Tx6HZ/H9q9pUkLN7Y/wDlbP8AZeuZeF/84/8AaalSp+P7WZv+088S/GfeoZpUq28f2kLD26kW/wD20qVS5O4SSrVSrXWvaVZbzpIbj6VXarg+xr2lSU7nPUpb/wCF/YVWXuU/silSr0+LqRYaz+JqPren0/lSpUfcBAP+lDu/oKVKmftisFSpUqjOn//Z"
        alt="luke"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link to={`/friends/c3po`}>C3PO</Link>
        </Typography>
 </CardContent>
  </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_square.jpg"
        alt="luke"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link to={`/friends/r2d2`}>R2D2</Link>
        </Typography>
 </CardContent>
</Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://avatarfiles.alphacoders.com/711/thumb-71124.jpg"
        alt="leia"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link to={`/friends/leia`}>Leia</Link>
        </Typography>
   </CardContent>
</Card>

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.cadworxlive.com/blobs/usergallery/IMG_lordvaderDarth-Vader_phixr.jpg"
        alt="vader"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link to={`/friends/darthvader`}>Darth Vader</Link>
        </Typography>
   </CardContent>
</Card>



    </main>


//  <div>



//     <h1>
//     <Link to={`/friends/r2d2`}>R2-D2</Link>  
//     </h1>

//     <h1>
//     <Link to={`/friends/leiaorgana`}>Leia Organa</Link>  
//     </h1>

// </div>
)
        }

export default Friends;