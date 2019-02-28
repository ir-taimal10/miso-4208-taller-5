Feature: User register in losestudiantes
  As an anonymous user I want to register myself within losestudiantes website in order to rate teachers

  Scenario Outline: Register failed with wrong inputs

    Given I go to losestudiantes home screen
    When I open the register screen
    And I fill resister form with <name>, <lastname>, <email>, <password>, <programa> and <accept>
    And I try to register
    Then I expect <behavior>

    Examples:
      | name       | lastname    | email                               | password   | programa   | accept | behavior                                            |
      | Carlos     | Valderrama  | carlos.valderrama@uniandes.edu.co   | admin123   | 12         | true   | RE:Regitro exitoso                                  |
      | Maria      | Valderrama  | maria.valderrama@uniandes.edu.co    | admin123   | 83         | false   | A:Debes aceptar los términos y condiciones                                 |
      | Marcela      | Valderrama  | marcela.valderrama@uniandes.edu.co    | admin123   | 7         | true   | RE:Regitro exitoso                               |
      | Micaela      | Valderrama  | micaela.valderrama@uniandes.edu.co    | admin123   | 87        | true   | RE:Regitro exitoso                               |
