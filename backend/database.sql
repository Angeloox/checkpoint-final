CREATE DATABASE capitals;

USE capitals;

CREATE TABLE capitals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  country VARCHAR(255) NOT NULL,
  capital VARCHAR(255) NOT NULL
);

INSERT INTO capitals (country, capital)
VALUES
('Albania', 'Tirana'),
('Andorra', 'Andorra la Vella'),
('Austria', 'Vienna'),
('Belarus', 'Minsk'),
('Belgium', 'Brussels'),
('Bosnia and Herzegovina', 'Sarajevo'),
('Bulgaria', 'Sofia'),
('Croatia', 'Zagreb'),
('Czechia', 'Prague'),
('Denmark', 'Copenhagen'),
('Estonia', 'Tallinn'),
('Finland', 'Helsinki'),
('France', 'Paris'),
('Germany', 'Berlin'),
('Greece', 'Athens'),
('Hungary', 'Budapest'),
('Iceland', 'Reykjavik'),
('Ireland', 'Dublin'),
('Italy', 'Rome'),
('Latvia', 'Riga'),
('Liechtenstein', 'Vaduz'),
('Lithuania', 'Vilnius'),
('Luxembourg', 'Luxembourg'),
('Malta', 'Valletta'),
('Moldova', 'Chisinau'),
('Monaco', 'Monaco'),
('Montenegro', 'Podgorica'),
('Netherlands', 'Amsterdam'),
('North Macedonia', 'Skopje'),
('Norway', 'Oslo'),
('Poland', 'Warsaw'),
('Portugal', 'Lisbon'),
('Romania', 'Bucharest'),
('Russia', 'Moscow'),
('San Marino', 'San Marino'),
('Serbia', 'Belgrade'),
('Slovakia', 'Bratislava'),
('Slovenia', 'Ljubljana'),
('Spain', 'Madrid'),
('Sweden', 'Stockholm'),
('Switzerland', 'Bern'),
('Ukraine', 'Kiev'),
('United Kingdom', 'London');