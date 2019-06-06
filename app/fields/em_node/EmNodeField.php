<?php

class EmNodeField extends FieldBase
{
	/**
	 * Достать значение поля
	 */
	public function getValue()
	{
		$select  = [
			'from'  => $this->settings['nodeTableCode'],
			'where' => [
				'operation' => 'and',
				'fields'    => [[
					'code'      => $this->settings['nodeFieldCode'],
					'operation' => 'IS',
					'value'     => $this->fieldValue
				]]
			]
		];
		$node = $this->element->select($select);

		if(count($node) > 0)
		{
			$node = $node[0];
			return [
				'id'   => $node[$this->settings['nodeFieldCode']]['value'],
				'name' => $node[$this->settings['nodeSearchCode']]['value'],
				'url'  => "/table/{$this->settings['nodeTableCode']}/el/{$node[$this->settings['nodeFieldCode']]['value']}"
			];
		}

		return [];
	}

	/**
	 * Сохранить значение
	 */
	public function saveValue()
	{
		return $this->fieldValue;
	}
}