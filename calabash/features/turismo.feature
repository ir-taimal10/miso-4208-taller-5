Feature: Search for tourism
  AS an user I WANT TO search an specific types of sites.

  Scenario: Init app, remove splash
    Given I press "Stations"


  Scenario Outline: I want to touch over each type tab
    Given I press "Turismo"
    Then I wait for 1 seconds
    Then I touch the <Type> text
    Then I wait for 1 seconds
    Then I wait to see <TypeDetail>

    Examples:
      | Type               | TypeDetail                      |
      | "TODOS"            | "21 Ángeles"                    |
      | "BIBLIOTECAS"      | "Biblioteca Bosa"               |
      | "MONUMENTOS"       | "Capitolio Nacional"            |
      | "MUSEOS"           | "Casa de la Moneda"             |