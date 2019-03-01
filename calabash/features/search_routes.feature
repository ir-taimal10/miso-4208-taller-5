Feature: Search for stations
  AS an user I WANT TO search an specific station TO check the different stops.

  Scenario: Init app, remove splash
    Given I press "Stations"

  Scenario: I want to tab a TRANSMILENIO station
    Given I press "Rutas"
    Then I wait for 1 seconds
    Then I touch the "TRANSMILENIO" text
    Then I wait for 1 seconds
    Then I touch the "Portal Usme >> Consejo de Bogotá" text
    Then I wait to see "Recorrido: Portal Usme >> Consejo de Bogotá"

  Scenario: I want to tab a Olaya station
    Given I press "Rutas"
    Then I wait for 1 seconds
    Then I touch the "TRANSMILENIO" text
    Then I wait for 1 seconds
    Then I touch the "Portal Usme >> Consejo de Bogotá" text
    Given I press "Olaya"
    Then I wait for 1 seconds
    Then I wait to see "Detalle:Av. Caracas / Cll. 27 sur"

  Scenario Outline: I want to search for any station taping the station name
    Given I press "Rutas"
    Then I wait for 1 seconds
    Then I touch the "TRANSMILENIO" text
    Then I touch the <Estacion> text
    Then I wait to see <DetalleEstacion>

    Examples:
      | Estacion                           | DetalleEstacion                                      |
      | "Portal Sur >> Heroes"             | "Recorrido: Portal Sur >> Heroes"                    |
      | "Heroes >> Portal Sur"             | "Recorrido: Heroes >> Portal Sur"                    |
      | "Ricaurte >> Portal Suba"          | "Recorrido: Ricaurte >> Portal Suba"                 |
      | "Guatoque - Veraguas >> Terminal"  | "Recorrido: Guatoque - Veraguas >> Terminal"         |