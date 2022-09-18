const responseMocked = [
    {
        "dt": 1663545600,
        "main": {
            "temp": 14.58,
            "feels_like": 14.16,
            "temp_min": 13.98,
            "temp_max": 14.58,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 930,
            "humidity": 79,
            "temp_kf": 0.6
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "nuvens dispersas",
                "icon": "03n"
            }
        ],
        "clouds": {
            "all": 28
        },
        "wind": {
            "speed": 3.87,
            "deg": 118,
            "gust": 5.93
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-19 00:00:00"
    },
    {
        "dt": 1663556400,
        "main": {
            "temp": 13.89,
            "feels_like": 13.45,
            "temp_min": 13.39,
            "temp_max": 13.89,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 929,
            "humidity": 81,
            "temp_kf": 0.5
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 55
        },
        "wind": {
            "speed": 3.55,
            "deg": 112,
            "gust": 5.9
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-19 03:00:00"
    },
    {
        "dt": 1663567200,
        "main": {
            "temp": 12.48,
            "feels_like": 12,
            "temp_min": 12.48,
            "temp_max": 12.48,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 928,
            "humidity": 85,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 61
        },
        "wind": {
            "speed": 3.11,
            "deg": 100,
            "gust": 5.68
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-19 06:00:00"
    },
    {
        "dt": 1663578000,
        "main": {
            "temp": 12.09,
            "feels_like": 11.6,
            "temp_min": 12.09,
            "temp_max": 12.09,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 928,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 75
        },
        "wind": {
            "speed": 3.2,
            "deg": 70,
            "gust": 6.48
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-19 09:00:00"
    },
    {
        "dt": 1663588800,
        "main": {
            "temp": 17.11,
            "feels_like": 16.42,
            "temp_min": 17.11,
            "temp_max": 17.11,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 929,
            "humidity": 59,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "nuvens dispersas",
                "icon": "03d"
            }
        ],
        "clouds": {
            "all": 47
        },
        "wind": {
            "speed": 3.11,
            "deg": 62,
            "gust": 4.5
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-19 12:00:00"
    },
    {
        "dt": 1663599600,
        "main": {
            "temp": 24.35,
            "feels_like": 23.78,
            "temp_min": 24.35,
            "temp_max": 24.35,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 928,
            "humidity": 36,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "nuvens dispersas",
                "icon": "03d"
            }
        ],
        "clouds": {
            "all": 32
        },
        "wind": {
            "speed": 2.1,
            "deg": 173,
            "gust": 3.07
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-19 15:00:00"
    },
    {
        "dt": 1663610400,
        "main": {
            "temp": 26.33,
            "feels_like": 26.33,
            "temp_min": 26.33,
            "temp_max": 26.33,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 925,
            "humidity": 31,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "nuvens dispersas",
                "icon": "03d"
            }
        ],
        "clouds": {
            "all": 39
        },
        "wind": {
            "speed": 3.18,
            "deg": 182,
            "gust": 2.09
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-19 18:00:00"
    },
    {
        "dt": 1663621200,
        "main": {
            "temp": 19.34,
            "feels_like": 18.95,
            "temp_min": 19.34,
            "temp_max": 19.34,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 926,
            "humidity": 62,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 95
        },
        "wind": {
            "speed": 4.4,
            "deg": 160,
            "gust": 5.27
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-19 21:00:00"
    },
    {
        "dt": 1663632000,
        "main": {
            "temp": 16.43,
            "feels_like": 15.96,
            "temp_min": 16.43,
            "temp_max": 16.43,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 926,
            "humidity": 70,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 89
        },
        "wind": {
            "speed": 3.55,
            "deg": 148,
            "gust": 5.12
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-20 00:00:00"
    },
    {
        "dt": 1663642800,
        "main": {
            "temp": 15.72,
            "feels_like": 15.25,
            "temp_min": 15.72,
            "temp_max": 15.72,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 924,
            "humidity": 73,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 76
        },
        "wind": {
            "speed": 2.23,
            "deg": 103,
            "gust": 4.59
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-20 03:00:00"
    },
    {
        "dt": 1663653600,
        "main": {
            "temp": 15.28,
            "feels_like": 14.9,
            "temp_min": 15.28,
            "temp_max": 15.28,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 925,
            "humidity": 78,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 77
        },
        "wind": {
            "speed": 2.68,
            "deg": 176,
            "gust": 3.87
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-20 06:00:00"
    },
    {
        "dt": 1663664400,
        "main": {
            "temp": 14.85,
            "feels_like": 14.69,
            "temp_min": 14.85,
            "temp_max": 14.85,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 926,
            "humidity": 88,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 99
        },
        "wind": {
            "speed": 1.99,
            "deg": 19,
            "gust": 2.86
        },
        "visibility": 10000,
        "pop": 0.69,
        "rain": {
            "3h": 1.06
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-20 09:00:00"
    },
    {
        "dt": 1663675200,
        "main": {
            "temp": 17.27,
            "feels_like": 17.14,
            "temp_min": 17.27,
            "temp_max": 17.27,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 925,
            "humidity": 80,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 2.55,
            "deg": 2,
            "gust": 5.65
        },
        "visibility": 10000,
        "pop": 0.9,
        "rain": {
            "3h": 1.53
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-20 12:00:00"
    },
    {
        "dt": 1663686000,
        "main": {
            "temp": 24.39,
            "feels_like": 24.32,
            "temp_min": 24.39,
            "temp_max": 24.39,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 925,
            "humidity": 55,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 3.47,
            "deg": 300,
            "gust": 7.85
        },
        "visibility": 10000,
        "pop": 0.83,
        "rain": {
            "3h": 1.14
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-20 15:00:00"
    },
    {
        "dt": 1663696800,
        "main": {
            "temp": 27.03,
            "feels_like": 27.21,
            "temp_min": 27.03,
            "temp_max": 27.03,
            "pressure": 1008,
            "sea_level": 1008,
            "grnd_level": 923,
            "humidity": 46,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 95
        },
        "wind": {
            "speed": 5.15,
            "deg": 282,
            "gust": 6.81
        },
        "visibility": 10000,
        "pop": 0.76,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-20 18:00:00"
    },
    {
        "dt": 1663707600,
        "main": {
            "temp": 23.63,
            "feels_like": 23.67,
            "temp_min": 23.63,
            "temp_max": 23.63,
            "pressure": 1008,
            "sea_level": 1008,
            "grnd_level": 922,
            "humidity": 62,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 57
        },
        "wind": {
            "speed": 2.79,
            "deg": 195,
            "gust": 4.88
        },
        "visibility": 10000,
        "pop": 0.27,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-20 21:00:00"
    },
    {
        "dt": 1663718400,
        "main": {
            "temp": 18.64,
            "feels_like": 18.88,
            "temp_min": 18.64,
            "temp_max": 18.64,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 924,
            "humidity": 89,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 54
        },
        "wind": {
            "speed": 2.62,
            "deg": 126,
            "gust": 3.84
        },
        "visibility": 4668,
        "pop": 1,
        "rain": {
            "3h": 1.95
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-21 00:00:00"
    },
    {
        "dt": 1663729200,
        "main": {
            "temp": 17.66,
            "feels_like": 17.91,
            "temp_min": 17.66,
            "temp_max": 17.66,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 924,
            "humidity": 93,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "chuva moderada",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 96
        },
        "wind": {
            "speed": 1.63,
            "deg": 122,
            "gust": 2.12
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 3.11
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-21 03:00:00"
    },
    {
        "dt": 1663740000,
        "main": {
            "temp": 17.39,
            "feels_like": 17.59,
            "temp_min": 17.39,
            "temp_max": 17.39,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 923,
            "humidity": 92,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 98
        },
        "wind": {
            "speed": 1.62,
            "deg": 123,
            "gust": 1.98
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 0.81
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-21 06:00:00"
    },
    {
        "dt": 1663750800,
        "main": {
            "temp": 16.87,
            "feels_like": 17.04,
            "temp_min": 16.87,
            "temp_max": 16.87,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 923,
            "humidity": 93,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.83,
            "deg": 72,
            "gust": 2.92
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 1.93
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-21 09:00:00"
    },
    {
        "dt": 1663761600,
        "main": {
            "temp": 17.67,
            "feels_like": 17.82,
            "temp_min": 17.67,
            "temp_max": 17.67,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 925,
            "humidity": 89,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 2.7,
            "deg": 135,
            "gust": 2.83
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 1.35
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-21 12:00:00"
    },
    {
        "dt": 1663772400,
        "main": {
            "temp": 19.84,
            "feels_like": 20.07,
            "temp_min": 19.84,
            "temp_max": 19.84,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 924,
            "humidity": 84,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.61,
            "deg": 202,
            "gust": 1.33
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 1.76
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-21 15:00:00"
    },
    {
        "dt": 1663783200,
        "main": {
            "temp": 19.81,
            "feels_like": 20.17,
            "temp_min": 19.81,
            "temp_max": 19.81,
            "pressure": 1007,
            "sea_level": 1007,
            "grnd_level": 921,
            "humidity": 89,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "chuva moderada",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 2.33,
            "deg": 148,
            "gust": 2.42
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 3.1
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-21 18:00:00"
    },
    {
        "dt": 1663794000,
        "main": {
            "temp": 16.73,
            "feels_like": 16.97,
            "temp_min": 16.73,
            "temp_max": 16.73,
            "pressure": 1008,
            "sea_level": 1008,
            "grnd_level": 920,
            "humidity": 96,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "chuva moderada",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 5.08,
            "deg": 158,
            "gust": 9.8
        },
        "visibility": 150,
        "pop": 1,
        "rain": {
            "3h": 5.14
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-21 21:00:00"
    },
    {
        "dt": 1663804800,
        "main": {
            "temp": 16.51,
            "feels_like": 16.7,
            "temp_min": 16.51,
            "temp_max": 16.51,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 924,
            "humidity": 95,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 502,
                "main": "Rain",
                "description": "chuva forte",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 3.07,
            "deg": 83,
            "gust": 5.17
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 15.2
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-22 00:00:00"
    },
    {
        "dt": 1663815600,
        "main": {
            "temp": 16.67,
            "feels_like": 16.93,
            "temp_min": 16.67,
            "temp_max": 16.67,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 923,
            "humidity": 97,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "chuva moderada",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.79,
            "deg": 30,
            "gust": 3.59
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 3.46
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-22 03:00:00"
    },
    {
        "dt": 1663826400,
        "main": {
            "temp": 16.68,
            "feels_like": 16.91,
            "temp_min": 16.68,
            "temp_max": 16.68,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 921,
            "humidity": 96,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.92,
            "deg": 359,
            "gust": 4.68
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 0.4
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-22 06:00:00"
    },
    {
        "dt": 1663837200,
        "main": {
            "temp": 16.42,
            "feels_like": 16.62,
            "temp_min": 16.42,
            "temp_max": 16.42,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 922,
            "humidity": 96,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 70
        },
        "wind": {
            "speed": 1.49,
            "deg": 272,
            "gust": 2.41
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-22 09:00:00"
    },
    {
        "dt": 1663848000,
        "main": {
            "temp": 20.46,
            "feels_like": 20.62,
            "temp_min": 20.46,
            "temp_max": 20.46,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 924,
            "humidity": 79,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 70
        },
        "wind": {
            "speed": 2.51,
            "deg": 285,
            "gust": 4.51
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-22 12:00:00"
    },
    {
        "dt": 1663858800,
        "main": {
            "temp": 24.34,
            "feels_like": 24.42,
            "temp_min": 24.34,
            "temp_max": 24.34,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 924,
            "humidity": 61,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 58
        },
        "wind": {
            "speed": 4.16,
            "deg": 278,
            "gust": 5.2
        },
        "visibility": 10000,
        "pop": 0.55,
        "rain": {
            "3h": 0.31
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-22 15:00:00"
    },
    {
        "dt": 1663869600,
        "main": {
            "temp": 21.27,
            "feels_like": 21.41,
            "temp_min": 21.27,
            "temp_max": 21.27,
            "pressure": 1008,
            "sea_level": 1008,
            "grnd_level": 922,
            "humidity": 75,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 79
        },
        "wind": {
            "speed": 4.1,
            "deg": 269,
            "gust": 7.29
        },
        "visibility": 10000,
        "pop": 0.87,
        "rain": {
            "3h": 2.02
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-22 18:00:00"
    },
    {
        "dt": 1663880400,
        "main": {
            "temp": 18.48,
            "feels_like": 18.55,
            "temp_min": 18.48,
            "temp_max": 18.48,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 923,
            "humidity": 83,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 3.86,
            "deg": 286,
            "gust": 8.55
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 2.69
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-22 21:00:00"
    },
    {
        "dt": 1663891200,
        "main": {
            "temp": 17.84,
            "feels_like": 17.9,
            "temp_min": 17.84,
            "temp_max": 17.84,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 924,
            "humidity": 85,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 2.2,
            "deg": 273,
            "gust": 5.92
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 0.21
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-23 00:00:00"
    },
    {
        "dt": 1663902000,
        "main": {
            "temp": 16.91,
            "feels_like": 17.03,
            "temp_min": 16.91,
            "temp_max": 16.91,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 925,
            "humidity": 91,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.85,
            "deg": 318,
            "gust": 5.15
        },
        "visibility": 10000,
        "pop": 0.22,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-23 03:00:00"
    },
    {
        "dt": 1663912800,
        "main": {
            "temp": 16.05,
            "feels_like": 16.09,
            "temp_min": 16.05,
            "temp_max": 16.05,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 924,
            "humidity": 91,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 76
        },
        "wind": {
            "speed": 3.13,
            "deg": 206,
            "gust": 6.49
        },
        "visibility": 10000,
        "pop": 0.64,
        "rain": {
            "3h": 0.99
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-09-23 06:00:00"
    },
    {
        "dt": 1663923600,
        "main": {
            "temp": 12.19,
            "feels_like": 11.5,
            "temp_min": 12.19,
            "temp_max": 12.19,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 926,
            "humidity": 78,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "chuva leve",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 95
        },
        "wind": {
            "speed": 4.06,
            "deg": 171,
            "gust": 6.63
        },
        "visibility": 10000,
        "pop": 0.54,
        "rain": {
            "3h": 0.32
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-23 09:00:00"
    },
    {
        "dt": 1663934400,
        "main": {
            "temp": 13.1,
            "feels_like": 12.48,
            "temp_min": 13.1,
            "temp_max": 13.1,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 928,
            "humidity": 77,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 96
        },
        "wind": {
            "speed": 2.82,
            "deg": 163,
            "gust": 3.02
        },
        "visibility": 10000,
        "pop": 0.27,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-23 12:00:00"
    },
    {
        "dt": 1663945200,
        "main": {
            "temp": 17.57,
            "feels_like": 16.98,
            "temp_min": 17.57,
            "temp_max": 17.57,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 928,
            "humidity": 61,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 88
        },
        "wind": {
            "speed": 0.76,
            "deg": 283,
            "gust": 2.61
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-23 15:00:00"
    },
    {
        "dt": 1663956000,
        "main": {
            "temp": 21.97,
            "feels_like": 21.14,
            "temp_min": 21.97,
            "temp_max": 21.97,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 926,
            "humidity": 35,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "nublado",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 60
        },
        "wind": {
            "speed": 3.01,
            "deg": 233,
            "gust": 5.48
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-23 18:00:00"
    },
    {
        "dt": 1663966800,
        "main": {
            "temp": 16.16,
            "feels_like": 15.4,
            "temp_min": 16.16,
            "temp_max": 16.16,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 927,
            "humidity": 60,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "céu limpo",
                "icon": "01d"
            }
        ],
        "clouds": {
            "all": 3
        },
        "wind": {
            "speed": 4.26,
            "deg": 160,
            "gust": 4.47
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-09-23 21:00:00"
    }
]

const weekForecastMocked = [
    {
      pop: '0%',
      humidity: '79%',
      wind: '4 Km/h',
      icon: '03n',
      weekDay: 'seg',
      temp: '15°C',
      date: '2022-09-19 00:00:00'
    },
    {
      pop: '0%',
      humidity: '70%',
      wind: '4 Km/h',
      icon: '04n',
      weekDay: 'ter',
      temp: '16°C',
      date: '2022-09-20 00:00:00'
    },
    {
      pop: '100%',
      humidity: '89%',
      wind: '3 Km/h',
      icon: '10n',
      weekDay: 'qua',
      temp: '19°C',
      date: '2022-09-21 00:00:00'
    },
    {
      pop: '100%',
      humidity: '95%',
      wind: '3 Km/h',
      icon: '10n',
      weekDay: 'qui',
      temp: '17°C',
      date: '2022-09-22 00:00:00'
    }
  ]

export {
    responseMocked,
    weekForecastMocked,
}