<?php
/**
* Абстрактный класс типа поля
*/
abstract class FieldBase extends Phalcon\Mvc\User\Plugin
{
	/**
	 * Подбор данных для формы настроек
	 * обязательно должен передать в вьюху параметр  formPath
	 * @param  array $settings насфтройки поля подгруженные из БД
	 * @param  array  $params   параметры (таблицы сайта, поля формы настроек) 
	 * @return void
	 */
	public function getSettings($settings, array $params){}

	/**
	 * Возвращает значение поля, обрабатывае то что в БД
	 * для вывода
	 * @param  string $fieldValue значение хранаящееся в БД
	 * @param  array $settings настройки поля
	 * @param  bool $table возварщять значение для вывода в таблицу, по умолчанию false
	 * @return string
	 */
	public function getValue($fieldValue,$settings,$table = false)
	{
		if($table)
		{
			$fieldValue = strip_tags($fieldValue);
			if(strlen($fieldValue) > 200)
				$fieldValue = substr($fieldValue, 0,200).'...';
			return $fieldValue;
		}
		else
			return $fieldValue;
	}

	/**
	 * Возвращает значение которое заносится в БД
	 * @param  array/string $fieldValue значение полученное из POST
	 * @param  arrya $fieldArray запись в БД о поле настройки и тд [settings,required]
	 * @return strign  значение которое заносится в БД
	 */
	public function saveValue($fieldValue,$fieldArray)
	{
		return $fieldValue;
	}

	/**
	 * Возврощает адрес представления для редактирования данного поля
	 * @return string
	 */
	public function getEditFieldPath()
	{
		if(empty($this->EditFieldPath))
			return false;
		else
			return $this->EditFieldPath;
	}
}